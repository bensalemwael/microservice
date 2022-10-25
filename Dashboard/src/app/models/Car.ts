import { Insurance } from "./Insurance";

export class Car {
    id: number;
    reference: string;
    nbr_horses: string;
    insurance?: Insurance;
}