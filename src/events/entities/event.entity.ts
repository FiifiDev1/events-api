import { ApiProperty } from "@nestjs/swagger";
import { Venue } from "src/venue/entities/venue.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column({type: 'timestamptz'})
    start_date: Date

    @ApiProperty()
    @Column({type: 'timestamptz'})
    end_date: Date

    @ApiProperty({ type: Venue})
    @ManyToOne(() => Venue, { nullable: true })
    @JoinColumn({ name: 'venue_id' }) 
    venue: Venue;

    @ApiProperty()
    @Column({type: 'text'})
    thumbnail: string

    @ApiProperty()
    @Column({type: 'varchar', length: '255'})
    status: string
}
