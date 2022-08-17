import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleRepository } from './repository/role.repository';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
  @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ){} 
  
  async create(createRoleDto: CreateRoleDto) {
      const newRole: Role = this.roleRepository.create(createRoleDto)
      return await this.roleRepository.save(newRole);
      //return 'This action adds a new user';
  }

  async findAll() {
      //return `This action returns all users`;
    return await this.roleRepository.find({
      //relations: ['user']
      });
  }
  
  async findOne(id: number) {
      //return `This action returns a #${id} user`;
      return await this.roleRepository.findOne({
          where: {
          id // same as id:id
          }, //relations: ['user']
      });
  }

  async update(id: number, updateUserDto: UpdateRoleDto) {
      //return `This action updates a #${id} user`;
      return await this.roleRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
      //return `This action removes a #${id} user`;
      return await this.roleRepository.delete(id);
  }
    
  async setRoleById(roleId: number,userId: number) {
    try {
      return await this.roleRepository.createQueryBuilder()
        .relation(Role, "user")
        .of(roleId)
        .add(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetRoleById(roleId: number,userId: number) {
    try {
        return await this.roleRepository.createQueryBuilder()
        .relation(Role, "user")
        .of(roleId)
        .remove(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
    
  async loadRoleRelation(roleId: number) {
    try {
        return await this.roleRepository.createQueryBuilder()
        .relation(Role, "user")
        .of(roleId)
        .loadMany()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}

