import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Apartment from './Apartment'

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;


    @ManyToOne(()=> Apartment, apartment => apartment.images)
    @JoinColumn({name: 'apartment_id'})
    apartment: Apartment; 
}