import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clinics")
export class Clinic {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

    @Column()
    place: string;

    @Column()
    number: number;

    @Column()
    neighborhood: string;

    @Column()
    complement: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    lat: string;

    @Column()
    long: string;
}
