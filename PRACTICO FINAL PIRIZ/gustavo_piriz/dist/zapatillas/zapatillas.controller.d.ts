import { ZapatillasService } from '/zapatillas.service';
export declare class ZapatillasController {
    private readonly zapatillasService;
    constructor(zapatillasService: ZapatillasService);
    getZapatillas(): string;
}
