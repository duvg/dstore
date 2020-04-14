
import { ILink } from './CommonInterfaces';

export interface IBuyer {
    identificador: number;
    nombre: string;
    correo: string;
    fechaCreacion: string;
    fechaActualizacion: string;
    fechaEliminacion: string;
    links: ILink[]
}

export interface IBuyers {
    [key: string]: IBuyer;
}