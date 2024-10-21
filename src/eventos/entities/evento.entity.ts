import { Discoteca } from "src/discotecas/entities/discoteca.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Consumidor } from "src/consumidores/entities/consumidore.entity";

@Entity()
export class Evento {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    nombre:string;

    @Column()
    fecha:Date;

    @Column()
    hora:string;

    @Column()
    cover:number;

    @Column()
    afiche:string;

    @ManyToOne(()=>Discoteca, (discoteca)=>discoteca.eventos)
    discoteca:Discoteca; 
    
    @OneToMany(()=>Consumidor, (consumidor)=>consumidor.evento)
    asistentes:Consumidor[];

    @ManyToOne(()=>Consumidor, (consumidor)=>consumidor.historicoDeEventos)
    consumidor:Consumidor;
    
}
