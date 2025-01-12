import { Module } from '@nestjs/common';
import { LoginModule } from 'libs/auth/features/login/src/index';

@Module({
  imports: [LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
