import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  HasMany,
  HasOne,
  ForeignKey
} from 'sequelize-typescript';
import { User, Order, CartItem } from './';

@Table({
  timestamps: true,
  tableName: 'carts'
})
export default class Cart extends Model {
  @Column({
    type: DataType.DOUBLE,
    allowNull: false
  })
  total!: number;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    defaultValue: 0
  })
  discount!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  tax!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'Pending'
  })
  status!: string;

  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number;

  @HasOne(() => Order)
  order!: Order;

  @HasMany(() => CartItem)
  cartItems!: CartItem[];
}
