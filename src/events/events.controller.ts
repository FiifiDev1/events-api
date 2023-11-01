import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpException, ParseArrayPipe, ValidationPipe, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { GetEventsQueryParams, SortQueryParam } from './dto/find-all.dto';
import { UuidValidationPipe } from './pipes/validation.pipe';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { Event } from './entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @ApiCreatedResponse({
    description: "Creates an event",
    type: Event,
  })
  @ApiBadRequestResponse({description: 'Event couldnt be created, try again'})
  create(@Body() createEvent: CreateEventDto) {
    console.log(createEvent)
    return this.eventsService.create(createEvent);
  }

  @Get()
  @ApiOkResponse({
    description: "Gets all events",
    type: [Event]
  })
  findAll(
    @Query(new ValidationPipe({ transform: true })) query: GetEventsQueryParams) {
    return this.eventsService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'gets a single event',
    type: Event
  })
  @ApiBadRequestResponse({description: 'no event with this id was found'})
  findOne(@Param('id', UuidValidationPipe) id: string) {
    return this.eventsService.findOne(id);
  }
  
  @Put(':id')
  @ApiOkResponse({
    description: 'updates an event',
    type: Event
  })
  @ApiBadRequestResponse({description: 'no event with this id was found'})
   async updateEvent(@Param('id', UuidValidationPipe) id: string, @Body(new ValidationPipe()) updateData: UpdateEventDto) {
    const updatedEvent = await this.eventsService.updateEvent(id, updateData);
    if (!updatedEvent) {
      throw new HttpException('event not found', 400)
    }
    return updatedEvent;
  }

  @Delete(':id' )
  @ApiOkResponse({
    description: 'delete an event',
    type: Event
  })
  @ApiBadRequestResponse({description: 'no event with this id was found'})
  deleteEvent(@Param('id', UuidValidationPipe) id: string) {
    return this.eventsService.deleteEvent(id);
  }
}
