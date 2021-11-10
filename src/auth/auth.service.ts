import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  async checkAuth(id: string, pw: string) {
    const user = await this.userRepo.findOne({ username: id });

    if (user) {
      const isMatch = await bcrypt.compare(pw, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return [true, result];
      }
    }
    return [false];
  }

  async create(createAuthDto: CreateAuthDto) {
    const user = this.userRepo.create({
      ...createAuthDto,
      password: await bcrypt.hash(createAuthDto.password, 10),
    });
    // console.log(createAuthDto);
    return this.userRepo.save(user);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
