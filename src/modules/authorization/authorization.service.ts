import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, userId: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.getRefreshToken(user),
    };
  }

  async getRefreshToken(user: any) {
    const payload = { username: user.username, userId: user.userId };

    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '4h',
    });
  }

  async refreshAccessToken(refreshToken: string) {
    const decoded = this.jwtService.verify(refreshToken, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
    });
    const payload = { username: decoded.username, userId: decoded.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
