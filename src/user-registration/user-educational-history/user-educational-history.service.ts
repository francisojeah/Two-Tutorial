import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserEducationalHistoryDto } from './dto/create-user-educational-history.dto';
import { UpdateUserEducationalHistoryDto } from './dto/update-user-educational-history.dto';
import { UserEducationalHistoryRepository } from './repository/userEducationalHistory.repository';
import { UserEducationalHistory } from './entities/user-educational-history.entity';
import { Repository } from 'typeorm';

  
@Injectable()
  export class UserEducationalHistoryService {
    constructor(
      @InjectRepository(UserEducationalHistory)
      private userEducationalHistoryRepository: Repository<UserEducationalHistory>,
    ){}
  async create(createUserEducationalHistoryDto: CreateUserEducationalHistoryDto) {
    const newUserEducationalHistory: UserEducationalHistory = this.userEducationalHistoryRepository.create(createUserEducationalHistoryDto)
      return await this.userEducationalHistoryRepository.save(newUserEducationalHistory);
    //return 'This action adds a new userEducationalHistory';
  }

  async findAll() {
    //return `This action returns all userEducationalHistory`;
    return await this.userEducationalHistoryRepository.find({
      //relations: ['user']
    });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} userEducationalHistory`;
    return await this.userEducationalHistoryRepository.findOne({
      where: {
      id // same as id:id
      }, //relations: ['user']
  });
  }

  async update(id: number, updateUserEducationalHistoryDto: UpdateUserEducationalHistoryDto) {
    //return `This action updates a #${id} userEducationalHistory`;
    return await this.userEducationalHistoryRepository.update(id, updateUserEducationalHistoryDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} userEducationalHistory`;
    return await this.userEducationalHistoryRepository.delete(id);
  }
   /* Work on relationships */
   async setUserById(userEducationalHistoryId: number, userId: number) {
    try {
      return await this.userEducationalHistoryRepository.createQueryBuilder()
        .relation(UserEducationalHistory, "user")
        .of(userEducationalHistoryId)
        .set(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(userEducationalHistoryId: number) {
    try {
      return await this.userEducationalHistoryRepository.createQueryBuilder()
        .relation(UserEducationalHistory, "user")
        .of(userEducationalHistoryId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async loadUserEducationalHistoryRelations(userEducationalHistoryId: number) {
    try {
      return await this.userEducationalHistoryRepository.createQueryBuilder()
        .relation(UserEducationalHistory, "user")
        .of(userEducationalHistoryId)
        .loadMany()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
