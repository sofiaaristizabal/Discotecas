import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import { MinLength } from "class-validator";
import { Evento } from "src/eventos/entities/evento.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity()
export class Consumidor {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text')
    tipoDeDocumento:string;

    @Column('text')
    documento:string; 

    @Column('text', {
        nullable:false
    })
    dateOfBirth:string;

    @Column('text', {
        nullable:true
    })
    profileImage: string; 

    @Column('text', {unique:true})
    @MinLength(4)
    email:string;

    @Column('text')
    @MinLength(8)
    password:string;

    @Column('boolean', {default:true})
    isActive:boolean;

    @Column('text')
    @MinLength(1)
    fullName:string; 

    @Column('text')
    phoneNumber:string;

    @ManyToOne(()=>Evento, (evento)=>evento.asistentes)
    evento:Evento;

    @OneToMany(()=>Evento, (evento)=>evento.consumidor)
    historicoDeEventos: Evento[];

    @ManyToOne(()=>Usuario, (usuario)=>usuario.consumidores)
    usuario:Usuario;
}
