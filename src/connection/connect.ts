import { Sequelize } from "sequelize-typescript";
import envConfig from "../config/env.config";
import { Test } from "../models/Test";

const connection = new Sequelize({
  dialect: "mysql",
  host: envConfig.dbHost,
  username: envConfig.dbUser,
  database: envConfig.dbName,
  logging: false,
  models: [Test]
});

export async function connect() {
  try {
    await connection.sync();
    console.log("Successfully connected to the database");
  } catch (e) {
    console.log(e);
  }
}