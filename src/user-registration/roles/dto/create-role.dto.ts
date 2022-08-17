import { CreateUserDto } from '../../users/dto/create-user.dto';
export class CreateRoleDto {
    readonly role: string;
    readonly users?: CreateUserDto;
    readonly isActive?: boolean;
    
}
