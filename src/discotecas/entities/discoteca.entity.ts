import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { MinLength } from "class-validator";
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
        nullable:true,
        
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

    @Column('text', {unique:true, nullable:true})
    @MinLength(4)
    email:string;   

    @Column('text',{nullable:true})
    @MinLength(8)
    password:string;

    @Column('boolean', {default:true})
    isActive:boolean;

    @Column('text',{nullable:true})
    @MinLength(1)
    fullName:string; 

    @Column('text',{nullable:true})
    phoneNumber:string;


    @OneToMany(()=>Evento, (evento)=>evento.discoteca)
    eventos: Evento[];

    @ManyToOne(()=>Usuario, (usuario)=>usuario.discotecas)
    usuario:Usuario;
}
