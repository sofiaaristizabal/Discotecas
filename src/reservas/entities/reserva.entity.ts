import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reserva {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    
}
