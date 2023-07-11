import {
  Table,
  Model,
  Column,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import Order from './Order';

@Table({
  timestamps: true,
  tableName: 'users',
})
export default class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
    password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Invalid email address',
      },
    },
  })
    email!: string;
	
  @HasMany(() => Order)
    images!:  Order[];
}