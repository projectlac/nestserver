import {MigrationInterface, QueryRunner} from "typeorm";

export class sua1636356433479 implements MigrationInterface {
    name = 'sua1636356433479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shikigami" ADD "pickAction" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shikigami" DROP COLUMN "pickAction"`);
    }

}
