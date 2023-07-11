import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Product from './Product';
import User from './User';

@Table({
  timestamps: true,
  tableName: 'favourite_lists',
})

export default class FavouriteList extends Model {

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    product_id!: number;
  
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    user_id!: number;

  @BelongsTo(() => Product) 
    products!: Product[];

  @BelongsTo(() => User)
    users!: User[];
}