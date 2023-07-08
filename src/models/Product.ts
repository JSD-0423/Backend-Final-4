import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import Review from './Review';


@Table({
  timestamps: true,
  tableName: 'products',
})

export default class Product extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    color!: string;
  
  @Column({
    type: DataType.DOUBLE(5, 2),
    allowNull: false,
  })
    price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
    discount!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    image!: string;

  @HasMany(() => Review)
    reviews!: Review[];
}