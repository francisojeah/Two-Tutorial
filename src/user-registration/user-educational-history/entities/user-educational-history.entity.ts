import { User } from "../../../user-registration/users/entities/user.entity";

import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ModeOfEntry } from "src/user-registration/userRegistration.types";
@Entity()

export class UserEducationalHistory extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    //@Column({nullable: true})
    //department: string;

    @Column({unique: true})
    matriculationNumber: string;

    @Column({type: 'enum', enum: ModeOfEntry, default: ModeOfEntry.UTME})
    modeOfEntry: ModeOfEntry;

    @Column()
    programOfStudy: string;

    @Column({default: new Date().getFullYear()})
    yearOfEntry: number;
    
    @OneToOne(() => User, user => user.usereducationalhistory,{cascade:true} )
    @JoinColumn()
    user: User;

    //@Index()
    //@OneToOne(type => User, user => user.customer, {cascade: true, onUpdate: "CASCADE"})
    //@JoinColumn({name: 'userId'})
    //user: User
    /*
    @Column({nullable: true})
    userId: number;
*/
}

