import { Department } from '../../departments/entities/department.entity';
import {BaseEntity, Column, Entity, ManyToOne, OneToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable, BeforeInsert, BeforeUpdate, JoinColumn, Index } from "typeorm";
import { UserEducationalHistory } from '../../user-educational-history/entities/user-educational-history.entity';
import { Role } from 'src/user-registration/roles/entities/role.entity';
import { UserRole} from "src/user-registration/userRegistration.types";

@Entity()
//@Index(['email', 'userName', 'role', 'department'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    ROLE: UserRole
    //@Column({
        //type: "set",
        //'enum: ["admin", "editor", "ghost"],
        //default: ["ghost", "editor"]
    //})
    //roles: UserRoleType[]

    @Column()
    firstName: string;
    @Column({nullable: true})
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column({nullable: true})
    dateOfBirth: Date;
    @Column({ nullable: true })
    nationality: string;
    @Column({ nullable: true })
    address: string;
    @Column({nullable: true})
    departmentId: number;
    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => Department, department => department.users)
    @JoinColumn({name: 'departmentId'})
    department: Department;

    @OneToOne(() => UserEducationalHistory, usereducationalhistory => usereducationalhistory.user)
    usereducationalhistory: UserEducationalHistory;
    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];

}
