import { Controller, Get, Post, Param } from '@nestjs/common';

@Controller('authorization')
export class AuthorizationController {
  @Get()
  findAll() {
    return 'This action returns all profiles';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns profile with id ${id}`;
  }

  @Post()
  create() {
    return 'This action adds a new profile';
  }
}
