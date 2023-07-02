import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
  timestamps: false,
  tableName: 'tests',
})

export class Test extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;
}