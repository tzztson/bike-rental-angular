import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BaseReponseDto {
  @ApiResponseProperty()
  @Expose()
  id!: number;

  @ApiResponseProperty()
  @Expose()
  created!: Date;

  @ApiResponseProperty()
  @Expose()
  updated!: Date;
}
