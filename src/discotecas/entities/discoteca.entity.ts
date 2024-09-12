import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Evento } from "src/eventos/entities/evento.entity";

@Entity()
export class Discoteca {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nombre:string;

    @Column()
    correo:string;

    @Column()
    password:string;

    @Column()
    direccion:string;

    @Column()
    descripcion:string;

    @Column()
    horarios:string;

    @Column()
    genero:string;

    @Column()
    contacto:string;

    @Column()
    redSocial:string;

    @Column()
    menu:string;

    @OneToMany(()=>Evento, (evento)=>evento.discoteca)
    eventos: Evento[];
}
