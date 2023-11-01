import { Injectable } from '@nestjs/common';
import { FilterQueryParam } from './dto/all.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Venue } from './entities/venue.entity';


@Injectable()
export class VenueService {
  constructor(
  @InjectRepository(Venue)
  private readonly venue_repository: Repository<Venue>) {}



  async findOne(query) {
    const {filter} = query
    const parsedFilter = JSON.parse(filter)
    const venue = this.venue_repository.find({ where: { event_id: parsedFilter.event_id } });
    return venue

  }
}
