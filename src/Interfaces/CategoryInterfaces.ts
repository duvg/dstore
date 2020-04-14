import { ILink } from './CommonInterfaces';

export interface ICategory {
    identificador: string;
    titulo: string;
    detalles: string;
    links?: ILink[];
    fechaCreacion: string;
    fechaActualizacion: string;
    fechaEliminacion: string;
}

export interface ICategories {
    [key: string] : ICategory;
}