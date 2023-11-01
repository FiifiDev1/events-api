// venue.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Event } from 'src/events/entities/event.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Venue {
  @ApiProperty({description: 'sdfas'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({description: 'sdfas'})
  @Column()
  name: string;
  
  @ApiProperty({description: 'sdfas'})
  @Column()
  country: string;
  
  @ApiProperty({description: 'sdfas'})
  @Column()
  state: string;
  
  @ApiProperty({description: 'sdfas'})
  @Column()
  city: string;
  
  @ApiProperty({description: 'sdfas'})
  @Column()
  timezone: string;
  
  @ApiProperty({description: 'sdfas'})
  @Column()
  zip_code: string;

  @ApiProperty({description: 'sdfas'})
  @Column()
  address: string
  
  @ApiProperty({description: 'sdfas'})
  @Column('uuid')
  event_id: string
  
//   @ManyToOne(() => Event, (event) => event.venue, { eager: true })
//   @JoinColumn({ name: 'event_id' })
//   event: Event;
}
