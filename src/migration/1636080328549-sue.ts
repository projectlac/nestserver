import {MigrationInterface, QueryRunner} from "typeorm";

export class sue1636080328549 implements MigrationInterface {
    name = 'sue1636080328549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shikigami" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "prioritized" character varying NOT NULL, "rank" character varying NOT NULL, "disable" boolean NOT NULL DEFAULT false, "bluePick" boolean NOT NULL DEFAULT false, "redPick" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c42dd2b23c15dde3f35f4c890a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "shikigami"`);
    }

}
