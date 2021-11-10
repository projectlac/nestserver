import { PartialType } from '@nestjs/mapped-types';
import { CreateShikigamiDto } from './create-shikigami.dto';

export class UpdateShikigamiDto {
  name: string;
  rank: string;
  prioritized: string;
  image?: string;
}
