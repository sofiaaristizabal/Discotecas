import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Evento } from "src/eventos/entities/evento.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity()
export class Discoteca extends Usuario{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {
        nullable:false
    })
    direccion:string;

    @Column('text')
    descripcion:string;

    @Column('text')
    horarios:string;

    @Column('text')
    genero:string;

    @Column('text')
    contacto:string;

    @Column('text')
    redSocial:string;

    @Column('text')
    menu:string;

    @OneToMany(()=>Evento, (evento)=>evento.discoteca)
    eventos: Evento[];

    @ManyToOne(()=>Usuario, (usuario)=>usuario.discotecas)
    usuario:Usuario;
}
