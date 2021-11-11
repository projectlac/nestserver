"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShikigamiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shikigami_entity_1 = require("./entities/shikigami.entity");
const upload_config_1 = require("../upload.config");
let ShikigamiService = class ShikigamiService {
    constructor(shikiRepo) {
        this.shikiRepo = shikiRepo;
    }
    create(createShikigamiDto) {
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
    getUrlOfFile(file, createShikigamiDto) {
        const image = (0, upload_config_1.ReturnUrlImage)(file.filename);
        const newCat = Object.assign(Object.assign({}, createShikigamiDto), { image });
        return this.shikiRepo.save(newCat);
    }
    async updateWithFile(id, update, file) {
        const shiki = await this.findOne(id);
        if (!shiki)
            throw new common_1.NotFoundException();
        if (file)
            update.image = (0, upload_config_1.ReturnUrlImage)(file.filename);
        await this.shikiRepo.update(id, Object.assign({}, update));
        return 'Updated!';
    }
    async findData() {
        const user = await this.shikiRepo.find();
        return user;
    }
    findOne(id) {
        return this.shikiRepo.findOne(id);
    }
    async update(id, updateShikigamiDto) {
        const cat = await this.shikiRepo.findOne(id);
        console.log(cat);
        this.shikiRepo.merge(cat, updateShikigamiDto);
        return this.shikiRepo.save(cat);
    }
    async remove(id) {
        await this.shikiRepo.delete(id);
        return true;
    }
};
ShikigamiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shikigami_entity_1.Shikigami)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShikigamiService);
exports.ShikigamiService = ShikigamiService;
//# sourceMappingURL=shikigami.service.js.map