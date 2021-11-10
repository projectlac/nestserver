import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
} from '@nestjs/common';
import { ShikigamiService } from './shikigami.service';
import { CreateShikigamiDto } from './dto/create-shikigami.dto';
import { UpdateShikigamiDto } from './dto/update-shikigami.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Dest, multerOptions } from 'src/upload.config';
import { Shikigami } from './entities/shikigami.entity';

@Controller('shikigami')
export class ShikigamiController {
  constructor(private readonly shikigamiService: ShikigamiService) {}

  @Post()
  create(@Body() createShikigamiDto: CreateShikigamiDto) {
    return this.shikigamiService.create(createShikigamiDto);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('images', multerOptions(Dest.Profile)))
  async uploadFile(
    @Body() body,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<CreateShikigamiDto> {
    console.log(file);

    // console.log(file);
    // console.log(body);
    return this.shikigamiService.getUrlOfFile(file, body);
  }

  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('images', multerOptions(Dest.Profile)))
  async updateABC(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateShikigamiDto,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<string> {
    // console.log(file);
    return this.shikigamiService.updateWithFile(id, body, file);
  }

  @Get()
  findAll() {
    return this.shikigamiService.findAll();
  }

  @Get('data')
  findData() {
    return this.shikigamiService.findData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shikigamiService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShikigamiDto: UpdateShikigamiDto,
  ) {
    return this.shikigamiService.update(+id, updateShikigamiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shikigamiService.remove(+id);
  }
}
