import {MigrationInterface, QueryRunner} from "typeorm";

export class sue1636104649042 implements MigrationInterface {
    name = 'sue1636104649042'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "groupmatch" ("gm_id" SERIAL NOT NULL, "time" character varying NOT NULL, "date" character varying NOT NULL, "match" character varying NOT NULL, CONSTRAINT "PK_69f7db07bb5abdc95198877923f" PRIMARY KEY ("gm_id"))`);
        await queryRunner.query(`CREATE TABLE "match" ("match_id" SERIAL NOT NULL, "player1" character varying NOT NULL, "player2" character varying NOT NULL, "score" character varying NOT NULL, "groupMatch" integer NOT NULL, CONSTRAINT "PK_2e7d516f3dc97d9e2f882212d2b" PRIMARY KEY ("match_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "match"`);
        await queryRunner.query(`DROP TABLE "groupmatch"`);
    }

}
