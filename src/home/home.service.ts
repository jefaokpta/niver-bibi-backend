import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {


  findAll() {
    return 'This action returns all home';
  }

  findOne(id: number) {
    return `This action returns a #${id} home`;
  }

  remove(id: number) {
    return `This action removes a #${id} home`;
  }
}
