import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Evento } from "src/eventos/entities/evento.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity()
export class Discoteca{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text', {
        nullable:false
    })
    direccion:string;

    @Column('text', {
        nullable:true
    })
    descripcion:string;

    @Column('text', {
        nullable:true
    })
    horarios:string;

    @Column('text', {
        nullable:true
    })
    contacto:string;

    @Column('text', {
        nullable:true
    })
    redSocial:string;

    @Column('text', {
        nullable:true
    })
    profileImage: string; 

    @OneToMany(()=>Evento, (evento)=>evento.discoteca)
    eventos: Evento[];

    @ManyToOne(()=>Usuario, (usuario)=>usuario.discotecas)
    usuario:Usuario;
}
