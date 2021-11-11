"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sua1636356433479 = void 0;
class sua1636356433479 {
    constructor() {
        this.name = 'sua1636356433479';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shikigami" ADD "pickAction" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "shikigami" DROP COLUMN "pickAction"`);
    }
}
exports.sua1636356433479 = sua1636356433479;
//# sourceMappingURL=1636356433479-sua.js.map