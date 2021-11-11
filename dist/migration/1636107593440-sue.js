"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sue1636107593440 = void 0;
class sue1636107593440 {
    constructor() {
        this.name = 'sue1636107593440';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "match_group_match_groupmatch" ("matchMatchId" integer NOT NULL, "groupmatchGmId" integer NOT NULL, CONSTRAINT "PK_ab2c3b8ef14d16fa0ba23ce142c" PRIMARY KEY ("matchMatchId", "groupmatchGmId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_db74c96b4eab1337358c87da52" ON "match_group_match_groupmatch" ("matchMatchId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d4857cc631fd0266e6de7274ad" ON "match_group_match_groupmatch" ("groupmatchGmId") `);
        await queryRunner.query(`ALTER TABLE "match" DROP COLUMN "groupMatch"`);
        await queryRunner.query(`ALTER TABLE "match_group_match_groupmatch" ADD CONSTRAINT "FK_db74c96b4eab1337358c87da52d" FOREIGN KEY ("matchMatchId") REFERENCES "match"("match_id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "match_group_match_groupmatch" ADD CONSTRAINT "FK_d4857cc631fd0266e6de7274ad0" FOREIGN KEY ("groupmatchGmId") REFERENCES "groupmatch"("gm_id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "match_group_match_groupmatch" DROP CONSTRAINT "FK_d4857cc631fd0266e6de7274ad0"`);
        await queryRunner.query(`ALTER TABLE "match_group_match_groupmatch" DROP CONSTRAINT "FK_db74c96b4eab1337358c87da52d"`);
        await queryRunner.query(`ALTER TABLE "match" ADD "groupMatch" integer NOT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d4857cc631fd0266e6de7274ad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_db74c96b4eab1337358c87da52"`);
        await queryRunner.query(`DROP TABLE "match_group_match_groupmatch"`);
    }
}
exports.sue1636107593440 = sue1636107593440;
//# sourceMappingURL=1636107593440-sue.js.map