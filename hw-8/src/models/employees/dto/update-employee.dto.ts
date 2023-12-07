import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEmploeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  middleName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  position: string;
}
