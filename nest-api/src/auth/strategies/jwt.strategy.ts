import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '054740cb5199d8c8e249c7f944f838cc5e88e32a2c92287ea4fc71153ff919d3edd76957f283cb7a37802e4e7e5d063cc91421066d773a4d2362201a8d1d1032',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}