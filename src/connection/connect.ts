import { Sequelize } from 'sequelize-typescript';
import envConfig from '../config/env.config';
import { Product, Review } from '../models';

const connection = new Sequelize({
  dialect: 'mysql',
  host: envConfig.dbHost,
  username: envConfig.dbUser,
  database: envConfig.dbName,
  password: envConfig.dbPassword,
  port: Number(envConfig.dbPort) || 3306,
  logging: false,
  models: [Product, Review],
});

export async function connect() {
  try {
    await connection.sync();
    console.log('Successfully connected to the database');
  } catch (e) {
    console.log(e);
  }
}