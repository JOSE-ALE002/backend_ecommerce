import { Dialect, Sequelize } from "sequelize";

const connection: Dialect  = 'postgres';
const host: string = process.env.DB_HOST!;
const username: string = process.env.DB_USERNAME!;
const password: string = process.env.DB_PASSWORD!;
const database: string = process.env.DB_DATABASE!;
const ds: string = process.env.SECRET!;

export const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: 5432,
    logging: false,
    dialect: connection,    
});