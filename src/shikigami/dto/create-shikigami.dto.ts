import { ApiProperty } from '@nestjs/swagger';

export class CreateShikigamiDto {
  name: string;
  rank: string;
  prioritized: string;
}
