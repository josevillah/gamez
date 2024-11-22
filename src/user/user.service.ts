import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

// Data Transfer Object
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findAll(){
    return await this.userModel.find();
  }

  // Método para crear un usuario
  async create(createUser: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUser);
    return await newUser.save();
  }


  async login(username: string){
    return await this.userModel.findOne({ username });
  }

  async update(id: string, updateUser: UpdateUserDto){
    return await this.userModel.findByIdAndUpdate(id, updateUser);
  }
}