import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import User from './User';

@Table({
  timestamps: true,
  tableName: 'orders',
})
export default class Order extends Model {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    user_id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  })
    status!: string;

  @BelongsTo(() => User)
    user!: User;
}