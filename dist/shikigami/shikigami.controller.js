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
exports.ShikigamiController = void 0;
const common_1 = require("@nestjs/common");
const shikigami_service_1 = require("./shikigami.service");
const create_shikigami_dto_1 = require("./dto/create-shikigami.dto");
const update_shikigami_dto_1 = require("./dto/update-shikigami.dto");
const platform_express_1 = require("@nestjs/platform-express");
const upload_config_1 = require("../upload.config");
let ShikigamiController = class ShikigamiController {
    constructor(shikigamiService) {
        this.shikigamiService = shikigamiService;
    }
    create(createShikigamiDto) {
        return this.shikigamiService.create(createShikigamiDto);
    }
    async uploadFile(body, file) {
        console.log(file);
        return this.shikigamiService.getUrlOfFile(file, body);
    }
    async updateABC(id, body, file) {
        return this.shikigamiService.updateWithFile(id, body, file);
    }
    findAll() {
        return this.shikigamiService.findAll();
    }
    findData() {
        return this.shikigamiService.findData();
    }
    findOne(id) {
        return this.shikigamiService.findOne(+id);
    }
    update(id, updateShikigamiDto) {
        return this.shikigamiService.update(+id, updateShikigamiDto);
    }
    remove(id) {
        return this.shikigamiService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shikigami_dto_1.CreateShikigamiDto]),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('images', (0, upload_config_1.multerOptions)(upload_config_1.Dest.Profile))),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShikigamiController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('images', (0, upload_config_1.multerOptions)(upload_config_1.Dest.Profile))),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_shikigami_dto_1.UpdateShikigamiDto, Object]),
    __metadata("design:returntype", Promise)
], ShikigamiController.prototype, "updateABC", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "findData", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_shikigami_dto_1.UpdateShikigamiDto]),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShikigamiController.prototype, "remove", null);
ShikigamiController = __decorate([
    (0, common_1.Controller)('shikigami'),
    __metadata("design:paramtypes", [shikigami_service_1.ShikigamiService])
], ShikigamiController);
exports.ShikigamiController = ShikigamiController;
//# sourceMappingURL=shikigami.controller.js.map