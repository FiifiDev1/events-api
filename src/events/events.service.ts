import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository,  } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { FindOneOptions, In, Repository, SelectQueryBuilder } from 'typeorm';
import { Venue } from 'src/venue/entities/venue.entity';


@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private readonly event_repository: Repository<Event>,
    @InjectRepository(Venue)
    private readonly venue_repository: Repository<Venue>
  ) {}

  async create(createEventDto: CreateEventDto) {
    const {name, description, venue, start_date, end_date, thumbnail, status} = createEventDto
    
    const event = new Event();
    event.name = name;
    event.description = description;
    event.start_date = start_date
    event.end_date = end_date
    event.thumbnail = thumbnail
    event.status = status

    const addedEvent = await this.event_repository.save(event);

    if(addedEvent){
      const venue_ = new Venue()
      venue_.name = venue.name
      venue_.city = venue.city
      venue_.country = venue.country
      venue_.zip_code = venue.zip_code,
      venue_.state = venue.state
      venue_.address = venue.address
      venue_.timezone = venue.timezone
      venue_.event_id = event.id
      const addedVenue = await this.venue_repository.save(venue_)

      event.venue = addedVenue

      return addedEvent
    }
    
    
    
  }

  async findAll(query) {
    const {sort, range, filter} = query
    let queryBuilder: SelectQueryBuilder<Event> = this.event_repository.createQueryBuilder('event');

    console.log(filter)

    if(sort){
      const parsedSort = JSON.parse(sort); 
      const [sortField, sortOrder] = parsedSort;
      console.log(sortOrder)
      queryBuilder = queryBuilder.orderBy(`event.${sortField}`, sortOrder);
    }

    // Filtering
    if (filter && JSON.parse(filter).start_date) {
      const parsedFilter = JSON.parse(filter);
      queryBuilder = queryBuilder.where('event.start_date = :start_date', { start_date: parsedFilter.start_date });
    }

    if(filter && JSON.parse(filter).ids){
      const ids  = JSON.parse(filter).ids
      return this.event_repository.find({ where: { id: In(ids) }, relations: ['venue'] });
    
    }

    if (range) {
      const parsedRange = JSON.parse(range); 
      const [start, end] = parsedRange;
      console.log(start, end)
      queryBuilder = queryBuilder.offset(start).limit(end - start + 1);
    }

    const data = await queryBuilder.leftJoinAndSelect('event.venue', 'venue').getMany();

    const with_venue_promises = data.map(async event => {
      const venue_options: FindOneOptions<Venue> = {
        where: { event_id: event.id },
      };

      const venue = await this.venue_repository.findOne(venue_options);
      event.venue = venue
      return event
      })

      const with_venue = await Promise.all(with_venue_promises)
      if(data)
        return data
  }

  async findOne(id: string) {
    const event_options: FindOneOptions<Event> = {
      where: { id },
    };
    const venue_options: FindOneOptions<Venue> = {
      where: { event_id: id },
    };

    const event = await this.event_repository.findOne(event_options);
    const venue = await this.venue_repository.findOne(venue_options);

    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found`);
    }

    event.venue = venue
    return event;
  }

  async updateEvent(id: string, updateData: UpdateEventDto): Promise<Event | null> {
    const options: FindOneOptions<Event> = {
      where: { id },
    };

    const event = await this.event_repository.findOne(options);   
    if (event) {
      console.log(event)
        if (updateData.name) {
          event.name = updateData.name;
        }
    
        if(updateData.description){
          event.description = updateData.description
        }
    
    }

    const updated_event = await this.event_repository.save(event);
    return updated_event
  }


  async deleteEvent(id: string): Promise<any> {
    const deleted_event = await this.event_repository.delete(id);
    
    if (deleted_event.affected === 0) {
      throw new HttpException(`Event with ID ${id} not found`, 400);
    }
    const deleted_venue = await this.venue_repository.delete({event_id: id})

    return {message: `deleted successfully`}
  }


}
