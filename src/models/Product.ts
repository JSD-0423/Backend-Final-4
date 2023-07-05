import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Review } from './Review';


@Table({
  timestamps: true,
  tableName: 'products',
})

export class Product extends Model {
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
    type: DataType.DECIMAL(8, 2),
    allowNull: false,
  })
    price!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
    discount!: number;

  @HasMany(() => Review)
    reviews!: Review[];
}