import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe } from '@nestjs/common';
import { VenueService } from './venue.service';
import { UuidValidationPipe } from 'src/events/pipes/validation.pipe';
import { FilterQueryParam } from './dto/all.dto';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { Venue } from './entities/venue.entity';

@Controller('venues')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Get('')
  @ApiOkResponse({
    description: 'gets an events venue',
    type: Venue
  })
  @ApiBadRequestResponse({description: 'no event venue with this id was found'})
  findOne(@Query(new ValidationPipe({transform: true})) query: FilterQueryParam) {

      return this.venueService.findOne(query);

  }
}
