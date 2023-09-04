import "reflect-metadata";
import { DataSource } from "typeorm"

import { entities } from "../entity";


export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE === "true",
    logging: process.env.DB_LOGGING === "true",
    entities,
    migrations: [],
    subscribers: [],
});

export const initializeDB = () => {
    return new Promise((res, rej) => {
        console.log({
            type: process.env.DB_TYPE as any,
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            synchronize: process.env.DB_SYNCHRONIZE === "true",
            logging: process.env.DB_LOGGING === "true",
            entities,
            migrations: [],
            subscribers: [],
        })
        AppDataSource.initialize().then(async () => {
            res(true);
        }).catch(error => {
            rej(error)
        })
    });
}