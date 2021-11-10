import { Module } from '@nestjs/common';
import { ShikigamiService } from './shikigami.service';
import { ShikigamiController } from './shikigami.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shikigami } from './entities/shikigami.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Shikigami])],
  controllers: [ShikigamiController],
  providers: [ShikigamiService],
})
export class ShikigamiModule {}
