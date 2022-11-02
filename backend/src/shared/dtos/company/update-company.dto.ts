import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto {
  @ApiProperty()
  signatoryContract?: string;

  @ApiProperty()
  operationalContract?: string;
}
