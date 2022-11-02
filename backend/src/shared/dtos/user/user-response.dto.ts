import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
export class UserResponseDto {
  @ApiResponseProperty()
  @Expose()
  id!: number;

  @ApiResponseProperty()
  @Expose()
  email!: string;

  @ApiResponseProperty()
  @Expose()
  firstName!: string;

  @ApiResponseProperty()
  @Expose()
  lastName!: string;

  @ApiResponseProperty()
  @Expose()
  role!: string;

  @ApiResponseProperty()
  @Expose()
  isVerified!: string;

  @ApiResponseProperty()
  @Expose()
  phoneNumber!: string;

  @ApiResponseProperty()
  @Expose()
  mobileNumber!: string;

  @ApiResponseProperty()
  @Expose()
  @Transform((user) => user?.obj?.company?.id)
  companyId!: number;
}
