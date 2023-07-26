import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
  BeforeCreate,
  HasOne
} from 'sequelize-typescript';
import { Order, FavouriteList, Address, Cart } from './';
import { hashPassword } from '../utils/bcrypt';

@Table({
  timestamps: true,
  tableName: 'users'
})
export default class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Invalid email address'
      }
    }
  })
  email!: string;

  @BeforeCreate
  static hashPassword(user: User) {
    const hash = hashPassword(user.password);
    user.password = hash;
  }

  @HasMany(() => Order)
  orders!: Order[];

  @HasMany(() => FavouriteList)
  favouriteLists!: FavouriteList[];

  @HasMany(() => Address)
  addresses!: Address[];

  @HasOne(() => Cart)
  cart!: Cart;

  async getCart(): Promise<Cart> {
    const cart = await Cart.findOrCreate({
      where: { user_id: this.id },
      defaults: {
        total: 0
      }
    });

    return cart[0];
  }
}
