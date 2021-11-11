"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShikigamiModule = void 0;
const common_1 = require("@nestjs/common");
const shikigami_service_1 = require("./shikigami.service");
const shikigami_controller_1 = require("./shikigami.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shikigami_entity_1 = require("./entities/shikigami.entity");
let ShikigamiModule = class ShikigamiModule {
};
ShikigamiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shikigami_entity_1.Shikigami])],
        controllers: [shikigami_controller_1.ShikigamiController],
        providers: [shikigami_service_1.ShikigamiService],
    })
], ShikigamiModule);
exports.ShikigamiModule = ShikigamiModule;
//# sourceMappingURL=shikigami.module.js.map