// /* eslint-disable @typescript-eslint/no-unsafe-call */
// (^^^^^^commented^^^^^^) deactivated the above rule for this file because it causes issues with class-validator decorators
import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;
  @IsString()
  @IsOptional()
  readonly model?: string;
  @IsString()
  @IsOptional()
  readonly brand?: string;
}
