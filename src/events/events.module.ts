import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Venue } from 'src/venue/entities/venue.entity';
import { VenueModule } from 'src/venue/venue.module';


@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [TypeOrmModule.forFeature([Event, Venue]), VenueModule]
})
export class EventsModule {}
