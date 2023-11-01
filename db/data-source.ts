import { DataSource, DataSourceOptions } from "typeorm";

export const data_source_options: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    database: process.env.DATABASE,
    password: process.env.DATABASE,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
}

const data_source = new DataSource(data_source_options)

export default data_source