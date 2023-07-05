import { Table, Model, Column, DataType } from 'sequelize-typescript';


@Table({
  timestamps: true,
  tableName: 'reviews',
})

export class Review extends Model {
  @Column({
    type: DataType.DECIMAL(2, 1),
    allowNull: false,
  })
    rating!: string;
	
  @Column({
    type: DataType.STRING, 
    allowNull: false,
  })
    body!: string;
}