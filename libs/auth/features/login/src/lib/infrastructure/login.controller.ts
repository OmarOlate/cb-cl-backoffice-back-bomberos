import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('Auth Management')
@Controller()
export class LoginController {
  @Get()
  @ApiOperation({ description: 'Login Service' })
  loginController() {
    return 'hola';
  }
}
