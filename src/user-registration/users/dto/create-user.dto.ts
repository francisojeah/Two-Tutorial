export class CreateUserDto {
  readonly firstName: string;
  readonly middleName?: string;
  readonly lastName: string;
  readonly email: string;
  readonly dateOfBirth?: Date;
  readonly nationality?: string;
  readonly address?: string;
  readonly departmentId?: number;
  readonly isActive?: boolean;
    
}
/*
{
    "firstName": "francis",
    "middleName": "Oluebube",
    "lastName": "Okocha-Ojeah",
    "email": "ojeahfrancis@gmail.com",
    "userName": "FrancisOjeah",
    "password": "1234testing",
    "phoneNumber": "09053896240",
    "nationality": "Nigerian"
}*/


