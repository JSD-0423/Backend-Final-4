import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import Product from './Product';


@Table({
  timestamps: true,
  tableName: 'reviews',
})

export default class Review extends Model {
  @Column({
    type: DataType.DOUBLE(3, 1),
    allowNull: false,
  })
    rating!: number;
	
  @Column({
    type: DataType.STRING, 
    allowNull: false,
  })
    body!: string;
  
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
    product_id!: number;
  
  @BelongsTo(() => Product)
    product!: Product;
}