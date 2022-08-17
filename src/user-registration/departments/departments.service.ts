import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository } from './repository/department.repository';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ){}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const newDepartment: Department = this.departmentRepository.create(createDepartmentDto)
    return await this.departmentRepository.save(newDepartment);
    
  }

  async findAll() {
    //`This action returns all departments`
    return await this.departmentRepository.find({
      //relations: ['user']
    })
  }

  async findOne(id: number) {
    //return `This action returns a #${id} department`;
    return await this.departmentRepository.findOne({
      where: {
      id, // same as id:id
      },
      //relations: ['user']
  });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    //return `This action updates a #${id} department`;
    return await this.departmentRepository.update(id, updateDepartmentDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} department`;
    return await this.departmentRepository.delete(id);
  }

  async setUserById( departmentId: number,userId: number) {
    try {
      return await this.departmentRepository.createQueryBuilder()
        .relation(Department, "user")
        .of(departmentId)
        .set(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(userId: number) {
    try {
      return await this.departmentRepository.createQueryBuilder()
      .relation(Department, "user")
      .of(userId)
      .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async loadDepartmentRelation(departmentId:number) {
    try {
      return await this.departmentRepository.createQueryBuilder()
      .relation(Department, "user")
      .of(departmentId)
      .loadMany()
      
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
    
}
