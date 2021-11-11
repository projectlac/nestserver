import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    auth(createAuthDto: CreateAuthDto): Promise<(boolean | {
        id: number;
        username: string;
    })[]>;
    create(createAuthDto: CreateAuthDto): Promise<import("../users/entities/user.entity").User>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
