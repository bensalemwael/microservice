import { Department } from "./Department";

export class User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    departementid?:number
}