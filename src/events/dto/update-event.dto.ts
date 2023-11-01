import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsUUID } from 'class-validator';
import { Venue } from 'src/venue/entities/venue.entity';

export class UpdateEventDto {
  @ApiProperty({example: 'Drink up'})
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({example: 'Drink up party'})
  @IsString()
  @IsOptional()
  description: string

}