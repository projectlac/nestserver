import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    checkAuth(id: string, pw: string): Promise<(boolean | {
        id: number;
        username: string;
    })[]>;
    create(createAuthDto: CreateAuthDto): Promise<User>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
