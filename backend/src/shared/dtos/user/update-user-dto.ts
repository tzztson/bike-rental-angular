import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  id!: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName!: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName!: string;

  @ApiProperty()
  @IsNotEmpty()
  role!: string;

  @ApiProperty()
  phoneNumber!: string;

  @ApiProperty()
  mobileNumber!: string;
}
