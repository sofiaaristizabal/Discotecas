import { MinLength } from "class-validator";
import { Entity, Column, TableInheritance, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Consumidor } from "src/consumidores/entities/consumidore.entity";

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'role' } })
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id:string;

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

    @OneToMany(()=>Consumidor, (consumidor)=>consumidor.usuario)
    consumidores:Consumidor[]; 

}
