/// <reference types="multer" />
import { ShikigamiService } from './shikigami.service';
import { CreateShikigamiDto } from './dto/create-shikigami.dto';
import { UpdateShikigamiDto } from './dto/update-shikigami.dto';
import { Shikigami } from './entities/shikigami.entity';
export declare class ShikigamiController {
    private readonly shikigamiService;
    constructor(shikigamiService: ShikigamiService);
    create(createShikigamiDto: CreateShikigamiDto): Promise<CreateShikigamiDto & Shikigami>;
    uploadFile(body: any, file: Express.Multer.File): Promise<CreateShikigamiDto>;
    updateABC(id: number, body: UpdateShikigamiDto, file?: Express.Multer.File): Promise<string>;
    findAll(): Promise<Shikigami[]>;
    findData(): Promise<Shikigami[]>;
    findOne(id: string): Promise<Shikigami>;
    update(id: string, updateShikigamiDto: UpdateShikigamiDto): Promise<Shikigami>;
    remove(id: string): Promise<boolean>;
}
