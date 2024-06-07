import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConstants = {
  secret: 'your_secret_key',
};

export const jwtConfig: JwtModuleOptions = {
  secret: jwtConstants.secret,
  signOptions: { expiresIn: '4h' },
};