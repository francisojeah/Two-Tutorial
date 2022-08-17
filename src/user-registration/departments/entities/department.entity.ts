import { User } from "../../../user-registration/users/entities/user.entity";

import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Department extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    department: string;
    @Column({ default: true })
    isActive: boolean;
    @OneToMany(() => User, users => users.department)
    users: User[];

}
