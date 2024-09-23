import { Controller, Get, Post, Param } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}
  @Get()
  login() {
    return this.authorizationService.login({ username: 'text', userId: '1' });
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
