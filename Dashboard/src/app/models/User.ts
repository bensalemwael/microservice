import { Department } from "./Department";

export class User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    department?:Department
}