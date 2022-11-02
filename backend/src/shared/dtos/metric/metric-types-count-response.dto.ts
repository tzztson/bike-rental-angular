import { ApiResponseProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
export class MetricTypesCountResponseDto {
  @ApiResponseProperty()
  loginCount!: number;

  @ApiResponseProperty()
  signUpCount!: number;

  @ApiResponseProperty()
  generateReportCount!: number;

  @ApiResponseProperty()
  viewReportCount!: number;
}
