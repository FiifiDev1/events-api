import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID, isString } from "class-validator";


export class QueryParam {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    event_id: string;
}

export class FilterQueryParam {
    @ApiProperty()
    @IsString()
    filter: QueryParam;
  }
  