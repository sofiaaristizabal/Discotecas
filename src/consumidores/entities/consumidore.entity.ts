import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
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

    @Column('text')
    profileImage: string; 

    @ManyToOne(()=>Evento, (evento)=>evento.asistentes)
    evento:Evento;

    @OneToMany(()=>Evento, (evento)=>evento.consumidor)
    historicoDeEventos: Evento[];

    @ManyToOne(()=>Usuario, (usuario)=>usuario.consumidores)
    usuario:Usuario;
}
