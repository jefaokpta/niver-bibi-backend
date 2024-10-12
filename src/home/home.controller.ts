import { Controller } from '@nestjs/common';
import { HomeService } from './home.service';
import { Get } from '@nestjs/common';
import { Render } from '@nestjs/common';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @Render('home')
  root() {
    return { message: 'Hello world!' };
  }
}
