import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignupDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  password!: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName!: string;
}
