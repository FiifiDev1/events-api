// query-params.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min, Max } from 'class-validator';

export class SortQueryParam {
  @ApiProperty({
    example: "House Party",
    description: "name of the event"
})
  @IsArray()
  @IsNotEmpty()
  sort: [string,any];
}

export class RangeQueryParam {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  range: [number, number];
}

export class FilterQueryParam {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  start_date: string;
}

export class GetEventsQueryParams {
  @IsOptional()
  sort: SortQueryParam;

  @IsOptional()
  range: RangeQueryParam;

  @IsOptional()
  filter: FilterQueryParam;
}
