import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Venue } from './entities/venue.entity';
import { EventsModule } from 'src/events/events.module';

console.log(typeof EventsModule)

@Module({
  controllers: [VenueController],
  providers: [VenueService],
  imports: [TypeOrmModule.forFeature([Venue])]
})
export class VenueModule {}
