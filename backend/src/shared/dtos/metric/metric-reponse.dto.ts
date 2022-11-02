import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { BaseReponseDto } from '..';
export class MetricResponseDto extends BaseReponseDto {
  @ApiResponseProperty()
  @Expose()
  @Transform((metric) => metric?.obj?.user?.id)
  userId!: number;

  @ApiResponseProperty()
  @Expose()
  type!: string;
}
