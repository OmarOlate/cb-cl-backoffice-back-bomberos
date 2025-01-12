import { Module } from '@nestjs/common';
import { loginService } from './login.service';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  providers: [loginService],
  exports: [],
})
export class LoginModule {}
