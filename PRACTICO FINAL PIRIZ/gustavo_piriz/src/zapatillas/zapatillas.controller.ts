import { Controller } from '@nestjs/common';
import { ZapatillasService } from '/zapatillas.service';

@Controller('zapatillas')
export class ZapatillasController {
    constructor(private readonly zapatillasService: ZapatillasService) {}

@Get()    
getZapatillas():string {
    return this.zapatillasService.getZapatillas();


@Post()  
postZapatillas():String {
    return this.zapatillasService.postZapatillas();}  
}


}







