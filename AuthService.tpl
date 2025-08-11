import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { {{ userModule.serviceName }} } from '../{{ userModule.folderName }}/{{ userModule.fileName }}.service';
import { {{ userModule.entityName }} } from '../{{ userModule.folderName }}/entities/{{ userModule.fileName }}.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: {{ userModule.serviceName }},
    private jwtService: JwtService,
  ) {}

  async validateUser(nombreemail: string, pass: string): Promise<any> {
    const user = await this.usersService.findByNombreemail(nombreemail);
    if (user && (await user.validatePassword(pass))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }

  async login(user: any) {
    const payload = { nombreemail: user.nombreemail, sub: user.idUsuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}