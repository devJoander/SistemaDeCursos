import { user } from "../user/user";

 

export interface curso {
    id: number;
    nombre: string;
    creador: user;
    estado: string;
    fechaCreacion: Date;
    fechaActualizacion: Date;
}   
