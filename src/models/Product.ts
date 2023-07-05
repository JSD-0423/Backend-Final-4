import { Table, Model, Column, DataType } from 'sequelize-typescript';


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
}