import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShikigamiDto } from './dto/create-shikigami.dto';
import { UpdateShikigamiDto } from './dto/update-shikigami.dto';
import { Repository } from 'typeorm';
import { Shikigami } from './entities/shikigami.entity';
import { NotFoundError } from 'rxjs';
import { ReturnUrlImage } from 'src/upload.config';
// import { identity } from 'rxjs';
@Injectable()
export class ShikigamiService {
  constructor(
    @InjectRepository(Shikigami) private shikiRepo: Repository<Shikigami>,
  ) {}

  create(createShikigamiDto: CreateShikigamiDto) {
    const newCat = createShikigamiDto;
    return this.shikiRepo.save(newCat);
  }

  findAll() {
    const user = this.shikiRepo
      .createQueryBuilder('shiki')
      .addSelect('shiki.disable')
      .addSelect('shiki.bluePick')
      .addSelect('shiki.redPick')
      .addSelect('shiki.pickAction')
      .getMany();
    return user;
  }
  getUrlOfFile(
    file: Express.Multer.File,
    createShikigamiDto: CreateShikigamiDto,
  ) {
    const image = ReturnUrlImage(file.filename);
    const newCat = { ...createShikigamiDto, image };
    // return newCat;
    return this.shikiRepo.save(newCat);
  }

  async updateWithFile(
    id: number,
    update: UpdateShikigamiDto,
    file?: Express.Multer.File,
  ): Promise<string> {
    const shiki = await this.findOne(id);
    if (!shiki) throw new NotFoundException();

    // console.log(update);
    if (file) update.image = ReturnUrlImage(file.filename);
    // console.log(update);
    // return newCat;
    await this.shikiRepo.update(id, { ...update });
    return 'Updated!';
  }
  async findData() {
    const user = await this.shikiRepo.find();
    // const newUser = user.map((value) => {
    //   const { disable, bluePick, redPick, pickAction, ...result } = value;
    //   // const { bluePick, ...result } = value;
    //   // const { redPick, ...result } = value;
    //   return result;
    // });
    return user;
  }
  findOne(id: number) {
    return this.shikiRepo.findOne(id);
  }

  async update(id: number, updateShikigamiDto: UpdateShikigamiDto) {
    const cat = await this.shikiRepo.findOne(id);
    console.log(cat);
    this.shikiRepo.merge(cat, updateShikigamiDto);
    return this.shikiRepo.save(cat);
  }

  async remove(id: number) {
    await this.shikiRepo.delete(id);
    return true;
  }
}
