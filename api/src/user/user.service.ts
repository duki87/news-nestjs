import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
//import { User as UserModel } from './user.model';
import { createUserDto } from './dto/createUser.dto';
//import { UserRepository } from './user.repository';


@Injectable()
export class UserService {
    
    constructor(@InjectRepository(User) private readonly _userRepository: Repository<User>) {  }

    public async create(user: createUserDto): Promise<any> {
        return await this._userRepository.save(user);
    }

    public async show(id: number): Promise<createUserDto> {
        return await this._userRepository.findOne(id);
    }
}
