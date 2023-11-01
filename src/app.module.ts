import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { data_source_options } from 'db/data-source';
import { VenueModule } from './venue/venue.module';

@Module({
  imports: [TypeOrmModule.forRoot(data_source_options), EventsModule, VenueModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
