/// <reference types="multer" />
import { CreateShikigamiDto } from './dto/create-shikigami.dto';
import { UpdateShikigamiDto } from './dto/update-shikigami.dto';
import { Repository } from 'typeorm';
import { Shikigami } from './entities/shikigami.entity';
export declare class ShikigamiService {
    private shikiRepo;
    constructor(shikiRepo: Repository<Shikigami>);
    create(createShikigamiDto: CreateShikigamiDto): Promise<CreateShikigamiDto & Shikigami>;
    findAll(): Promise<Shikigami[]>;
    getUrlOfFile(file: Express.Multer.File, createShikigamiDto: CreateShikigamiDto): Promise<{
        image: string;
        name: string;
        rank: string;
        prioritized: string;
    } & Shikigami>;
    updateWithFile(id: number, update: UpdateShikigamiDto, file?: Express.Multer.File): Promise<string>;
    findData(): Promise<Shikigami[]>;
    findOne(id: number): Promise<Shikigami>;
    update(id: number, updateShikigamiDto: UpdateShikigamiDto): Promise<Shikigami>;
    remove(id: number): Promise<boolean>;
}
