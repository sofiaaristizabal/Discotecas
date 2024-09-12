import { Discoteca } from "src/discotecas/entities/discoteca.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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
    tematica:string;

    discoteca:Discoteca; 
    
}
