import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Venue } from "src/venue/entities/venue.entity";


export class CreateEventDto {
    @ApiProperty({
        example: "House Party",
        description: "name of the event"
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: "This house party is for...",
        description: "description of the event"
    })
    description: string;

    @ApiProperty({
        example: '2023-11-01 12:30:45-08:00',
        description: 'starting date of event with timezone'
    })
    start_date: Date;

    @ApiProperty({
        example: '2023-11-01 12:30:45-08:00',
        description: 'ending date of event with timezone'
    })
    end_date: Date;

    @ApiProperty({})
    venue: Venue

    @ApiProperty()
    thumbnail: string;

    @ApiProperty()
    status: string
}
