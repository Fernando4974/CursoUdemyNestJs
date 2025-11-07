// /* eslint-disable @typescript-eslint/no-unsafe-call */
// (^^^^^^commented^^^^^^) deactivated the above rule for this file because it causes issues with class-validator decorators
import { IsString } from 'class-validator';
export class CreateCarDto {
  @IsString()
  readonly model: string;
  @IsString()
  readonly brand: string;
}
