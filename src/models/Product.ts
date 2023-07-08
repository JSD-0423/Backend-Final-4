import { Table, Model, Column, DataType, HasMany, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Review from './Review';
import Category from './Category';
import Brand from './Brand';


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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
    category_id!: number;

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.INTEGER,
  })
    brand_id!: number;

  @HasMany(() => Review)
    reviews!: Review[];

  @BelongsTo(() => Category)
    category!: Category;
  
  @BelongsTo(() => Brand)
    brand!: Brand;
}