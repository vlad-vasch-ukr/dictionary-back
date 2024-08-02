import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizationService {
  private users = [];

  findAll() {
    return this.users;
  }
}
