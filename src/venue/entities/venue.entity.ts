// venue.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Event } from 'src/events/entities/event.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Venue {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  name: string;
  
  @ApiProperty()
  @Column()
  country: string;
  
  @ApiProperty()
  @Column()
  state: string;
  
  @ApiProperty()
  @Column()
  city: string;
  
  @ApiProperty()
  @Column()
  timezone: string;
  
  @ApiProperty()
  @Column()
  zip_code: string;

  @ApiProperty()
  @Column()
  address: string
  
  @ApiProperty()
  @Column('uuid')
  event_id: string
  
//   @ManyToOne(() => Event, (event) => event.venue, { eager: true })
//   @JoinColumn({ name: 'event_id' })
//   event: Event;
}
