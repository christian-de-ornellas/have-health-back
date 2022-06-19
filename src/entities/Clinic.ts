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
    addressId: number;
}
