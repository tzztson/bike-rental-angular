import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
export class CompanyResponseDto {
  @ApiResponseProperty()
  @Expose()
  id: number;

  @ApiResponseProperty()
  @Expose()
  name!: string;

  @ApiResponseProperty()
  @Expose()
  signatoryContract?: string;

  @ApiResponseProperty()
  @Expose()
  operationalContract?: string;
}
