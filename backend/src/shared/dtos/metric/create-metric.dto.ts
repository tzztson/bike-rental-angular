import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { MetricTypeEnum } from '../../common/common';

export class CreateMetricDto {
  @ApiProperty()
  @IsNumber()
  userId!: number;

  @ApiProperty({
    enum: MetricTypeEnum,
    example: MetricTypeEnum.LOGIN,
  })
  @IsNotEmpty()
  @IsEnum(MetricTypeEnum)
  type!: MetricTypeEnum;
}
