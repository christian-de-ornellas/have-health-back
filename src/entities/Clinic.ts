import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from "typeorm";

@Entity("clinics")
export class Clinic {
    @PrimaryGeneratedColumn("uuid")
    id: number;

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

    @Column("float")
    lat: number;

    @Column("float")
    long: number;

    @CreateDateColumn()
    created_at: Date;
}
