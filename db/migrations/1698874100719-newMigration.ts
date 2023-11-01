import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1698874100719 implements MigrationInterface {
    name = 'NewMigration1698874100719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venue" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "country" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "timezone" character varying NOT NULL, "zip_code" character varying NOT NULL, "address" character varying NOT NULL, "event_id" uuid NOT NULL, CONSTRAINT "PK_c53deb6d1bcb088f9d459e7dbc0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "start_date" TIMESTAMP WITH TIME ZONE NOT NULL, "end_date" TIMESTAMP WITH TIME ZONE NOT NULL, "thumbnail" text NOT NULL, "status" character varying(255) NOT NULL, "venue_id" uuid, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_128347780df4ef90d1426da6c77" FOREIGN KEY ("venue_id") REFERENCES "venue"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_128347780df4ef90d1426da6c77"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TABLE "venue"`);
    }

}
