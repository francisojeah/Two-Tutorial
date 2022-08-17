import { Controller, Get, Post, Body, Patch, Param, Delete, Render, UsePipes, ValidationPipe } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get('create')
  @Render('roles/create-role.html')
  createForm() {
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
  @Patch(':roleId/user/:userId')
  setRoleById(@Param('roleId') roleId: number, @Param('userId') userId: number) {
    return this.rolesService.setRoleById(+roleId, +userId);
  }

  @Delete(':roleId/user/:userId')
  unsetRoleById(@Param('roleId') roleId: number, @Param('userId') userId: number) {
    return this.rolesService.unsetRoleById(+roleId,+userId );
  }

  @Get(':roleId/user')
  loadRoleRelation(@Param('roleId') roleId: number) {
    return this.rolesService.loadRoleRelation(+roleId);
  }
}
