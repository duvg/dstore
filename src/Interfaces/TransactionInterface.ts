import { ILink } from './CommonInterfaces';

export interface ITransaction {
    identificador: string;
    canrtidad: number;
    total: number;
    fechaCreacion: string;
    fechaActualizacion: string;
    fechaEliminacion?: string;
    links?: ILink[]
}

export interface ITransactions {
    [key: string]: ITransaction
}

