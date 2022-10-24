import { Vendor } from "./Vendor";

export class Material {
    materialId?: number;
    name: string;
    quantity: string;
    size: string;
    type: string;
    price: number;
    vendor : Vendor;
}
