import { Controller, Get, Req, Post, Res, Body, Param, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { User } from './user.entity';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly _userService: UserService) {  }

    @Post()
    async create(@Body() user: createUserDto): Promise<User[]> {
        return await this._userService.create(user);
    }

    @Get()
    findAll(@Req() request: Request): string {
      return 'This action returns all users';
    }
  
    @Get(':id')
    async findOne(@Param('id') id): Promise<createUserDto> {
      return await this._userService.show(id);
      //res.status(HttpStatus.CREATED).send();
    }
}