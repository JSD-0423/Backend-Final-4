import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { Order, Product } from './';

@Table({
  timestamps: false,
  tableName: 'order_items'
})
export default class OrderItem extends Model {
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  order_id!: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  product_id!: number;

  @BelongsTo(() => Order)
  order!: Order;

  @BelongsTo(() => Product)
  product!: Product;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  quantity!: number;
}
