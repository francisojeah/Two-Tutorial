import { User } from "../../../user-registration/users/entities/user.entity";

import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    role: string;
    @Column({ default: true })
    isActive: boolean;
}
