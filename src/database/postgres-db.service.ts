import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IDatabaseService } from './db.interface';

@Injectable()
export class DatabaseService<T> implements IDatabaseService<T> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(id: string): Promise<T | null> {
    return this.repository.findOneBy({ id } as any);
  }

  async create(data: T): Promise<T> {
    return this.repository.save(data);
  }

  async update(id: string, data: T): Promise<void> {
    await this.repository.update(id, data as any);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
