import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getChallenge(): string {
    return 'Desafio RPA Developer Devnology';
  }
}
