import { Column, Double, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Image from './Image'


@Entity('apartments')
export default class Apartment {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    titulo: string;

    @Column()
    descricao: string;

    @Column()
    nrApto: number;

    @Column()
    nmPredio: string;

    @Column()
    nrTorre: number;

    @Column()
    preco: number;

    @Column()
    cond: number;

    @Column()
    iptu: number;

    @Column()
    bairro: string;

    @Column()
    dtVenc: Date;

    @Column()
    aUtil: number;

    @Column()
    vGaragem: number;

    @Column()
    banh: number;

    @Column()
    suite: number;

    @Column()
    dorm: number;

    @Column()
    churras: boolean;

    @Column()
    piscina: boolean;

    @Column()
    playground: boolean;

    @Column()
    poli: boolean;

    @Column()
    sFestas: boolean;

    @Column()
    sauna: boolean;

    @Column()
    sJogos: boolean;

    @Column()
    ativo: boolean;

    @OneToMany(()=> Image,image=>image.apartment,{
        cascade: ['insert','update']
    })
    @JoinColumn({name:'apartment_id'})
    images: Image[]


}