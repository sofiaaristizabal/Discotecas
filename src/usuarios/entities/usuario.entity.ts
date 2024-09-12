import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
       id:string;
    
    @Column('text')
    email:string;

    @Column('text')
    password:string;

    @Column('text')
    nombreCompleto:string;

    @Column('text')
    fechaNacimiento:string; 
}
