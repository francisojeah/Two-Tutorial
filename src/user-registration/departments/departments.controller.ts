import { Controller, Get, Post, Body, Patch, Param, Delete, Render, ValidationPipe, UsePipes } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }
  @Get('create')
  @Render('departments/create-department.html')
  createForm() {
  }
  

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return await this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }

  @Patch(':departmentId/user/:userId')
  setUserById(@Param('departmentId') departmentId: number, @Param('userId') userId: number) {
    return this.departmentsService.setUserById(+departmentId, +userId);
  }

  @Delete('user/:userId')
  unsetUserById(@Param('departmentId') departmentId: number) {
    return this.departmentsService.unsetUserById(+departmentId);
  }
  
  @Get(':departmentId/user')
  loadDepartmentRelation(@Param('departmentId') departmentId: number) {
    return this.departmentsService.loadDepartmentRelation(+departmentId);
  }

  

}
