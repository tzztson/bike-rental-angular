import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AppConstants } from '../../common/constants';
import { Match } from '../../../core/decorators/validators/match.decorator';
export class ChangePasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  verificationCode!: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(AppConstants.MIN_PASSWORD_LENGTH)
  @MaxLength(AppConstants.MAX_PASSWORD_LENGTH)
  password!: string;

  @ApiProperty()
  @IsNotEmpty()
  @Match('password', { message: 'Password does not match' })
  repeatPassword!: string;
}
