import { ModeOfEntry } from "../../../user-registration/userRegistration.types";
import { User } from "../../../user-registration/users/entities/user.entity";
import { CreateUserDto } from '../../users/dto/create-user.dto';
export class CreateUserEducationalHistoryDto {
    readonly user?: CreateUserDto
    //readonly department?: string;
    readonly matriculationNumber: string;
    readonly modeOfEntry: ModeOfEntry;
    readonly programOfStudy: string;
    readonly yearOfEntry: number;
}
