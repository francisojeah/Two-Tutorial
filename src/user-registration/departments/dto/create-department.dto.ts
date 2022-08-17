import { CreateUserDto } from '../../users/dto/create-user.dto';
export class CreateDepartmentDto {
    readonly department: string;
    readonly users?: CreateUserDto[];
    readonly isActive?: boolean;
    
}
