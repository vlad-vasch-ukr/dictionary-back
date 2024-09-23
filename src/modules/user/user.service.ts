import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../database/entities/user.entity';
import { DatabaseService } from '../../database/postgres-db.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: DatabaseService<User>,
  ) {}

  async findAll(): Promise<User[] | undefined> {
    return this.userRepository.findAll();
  }
}
