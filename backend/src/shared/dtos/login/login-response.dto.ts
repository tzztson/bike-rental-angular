import { ApiResponseProperty } from '@nestjs/swagger';
export class LoginResponseDto {
  @ApiResponseProperty()
  token?: string;
}
