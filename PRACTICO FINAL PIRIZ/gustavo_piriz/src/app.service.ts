import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getZapatillas(): string {
    return 'goma, tela, cuero.';
  }

  posZapatillas(): string {
    return 'goma: $300, tela: $600, cuero: $1000.'
  }
}
