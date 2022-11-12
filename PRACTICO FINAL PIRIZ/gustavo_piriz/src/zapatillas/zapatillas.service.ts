import { Injectable } from '@nestjs/common';

@Injectable()
export class ZapatillasService {

    getZapatillas():string {
       return 'goma, tela, cuero.'; 
    }

    postZapatillas():string {
        return 'goma: $400, tela: $800, cuero: $1200.'
    }
}
