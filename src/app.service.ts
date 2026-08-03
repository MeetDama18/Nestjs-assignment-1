import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloController(): string {
    return 'Hello from Hello Controller';
  }
}
