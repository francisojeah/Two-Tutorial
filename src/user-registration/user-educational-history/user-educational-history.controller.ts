import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserEducationalHistoryService } from './user-educational-history.service';
import { CreateUserEducationalHistoryDto } from './dto/create-user-educational-history.dto';
import { UpdateUserEducationalHistoryDto } from './dto/update-user-educational-history.dto';

@Controller('user-educational-history')
export class UserEducationalHistoryController {
  constructor(private readonly userEducationalHistoryService: UserEducationalHistoryService) { }
  
  @Get('create')
  @Render('user-educational-histories/create-user-educational-history.html')
  createForm() {
  }


  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserEducationalHistoryDto: CreateUserEducationalHistoryDto) {
    return this.userEducationalHistoryService.create(createUserEducationalHistoryDto);
  }

  @Get()
  findAll() {
    return this.userEducationalHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEducationalHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEducationalHistoryDto: UpdateUserEducationalHistoryDto) {
    return this.userEducationalHistoryService.update(+id, updateUserEducationalHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEducationalHistoryService.remove(+id);
  }

  //Work on relationships 

  @Patch(':userEducationalHistoryId/user/:userId')
  setUserById(@Param('userEducationalHistoryId') userEducationalHistoryId: number, @Param('userId') userId: number) {
    return this.userEducationalHistoryService.setUserById(+userEducationalHistoryId, +userId);
  }

  @Delete(':userEducationalHistoryId/user')
  unsetUserById(@Param('userEducationalHistoryId') userEducationalHistoryId: number) {
    return this.userEducationalHistoryService.unsetUserById(+userEducationalHistoryId);
  }

  @Get(':userEducationalHistoryId/user')
  loadUserEducationalHistoryRelations(@Param('userEducationalHistoryId') userEducationalHistoryId: number) {
    return this.userEducationalHistoryService.loadUserEducationalHistoryRelations(+userEducationalHistoryId);
  }







}
