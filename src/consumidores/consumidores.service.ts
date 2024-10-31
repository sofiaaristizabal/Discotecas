import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateConsumidoreDto } from './dto/create-consumidore.dto';
import { UpdateConsumidoreDto } from './dto/update-consumidore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consumidor } from './entities/consumidore.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginConsumidorDto } from './dto/loginConsumidor-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ConsumidoresService {

  constructor( @InjectRepository(Consumidor)
    private readonly consumidorRepository: Repository<Consumidor>,
    private readonly usuarioService: UsuariosService
  ){}

  async create(createConsumidorDto: CreateConsumidoreDto) {

    try{
      const usuario = await this.usuarioService.create(createConsumidorDto); 
      const consumidor = this.consumidorRepository.create({ ...createConsumidorDto, usuario});  
      consumidor.password = await bcrypt.hash(consumidor.password, 10);
      await this.consumidorRepository.save(consumidor);
      return consumidor;
    } catch(err){
      console.log(err);
      throw new BadRequestException(err.detail);
    }
    
  }

  async findAll() {

    const consumidores = await this.consumidorRepository.find({});
    return consumidores;
  }

  async findOne(id: string) {

    const consumidor = await this.consumidorRepository.findOne({where:{id}, relations: ['user']});
    
    if(!consumidor){
      throw new NotFoundException(`the consumidor with id #${id} was not found `)
    }
    return consumidor;
  }

  async update(id: string, updateConsumidorDto: UpdateConsumidoreDto) {
    await this.usuarioService.update(id ,updateConsumidorDto)
    const consumidor = await this.consumidorRepository.preload({id:id,...updateConsumidorDto});
    if(!consumidor){
      throw new NotFoundException(`the consumidor with id #${id} was not found `)
    }
    
    this.consumidorRepository.save(consumidor);

    return consumidor;
  }

  async remove(id: string) {

    await this.usuarioService.remove(id);
    const consumidor = this.consumidorRepository.delete({id:id});
    return consumidor;
  }

  async login (loginConsumidorDto: LoginConsumidorDto){

    try {
      const {email, password} = loginConsumidorDto;
      const consumidor = await this.consumidorRepository.findOneBy({email})
      if(!consumidor){
        throw new UnauthorizedException('Invalid credentials');
      }
      
      console.log(password)
      console.log(consumidor.password)
      const isValid = bcrypt.compareSync(password, consumidor.password);
      console.log(isValid)
      if(!isValid){
        throw new UnauthorizedException('wrong password')
      }

      const {fullName, id} = consumidor;
      //const jwt = this.jwtService.sign({email, fullName});
      return {consumidor: {fullName, email, id}};
    } catch(err){
      console.log(err);
      throw new UnauthorizedException(err.detail);
    }
  }
}
