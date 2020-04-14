import { ILink } from './CommonInterfaces';
import { IProducts } from './ProductsInterfaces';


export interface ISeller {
    identificador: number;
    nombre: string;
    correo: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    fechaEliminacion?: string;
    products: IProducts; 
    links: ILink[]
}

export interface ISellers {
    [key: string]: ISeller;
}