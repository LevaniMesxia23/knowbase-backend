import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() input: { username: string; password: string }) {
    return await this.authService.authenticate(input);
  }
}
