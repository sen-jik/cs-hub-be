import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findAll() {
    return 'findAll';
  }

  async findOne(id: string) {
    return `findOne: ${id}`;
  }
}