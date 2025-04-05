import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getPro(): string {
        return 'My name is Khushbu!';
      }
}
