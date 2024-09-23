export interface IDatabaseService<T> {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T>;
  create(data: T): Promise<T>;
  update(id: string, data: T): Promise<void>;
  remove(id: string): Promise<void>;
}
