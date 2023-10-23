
export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    images:      string[];
    creationAt:  string;
    updatedAt:   string;
    category:    Category;
}

export interface Category {
    id:         number;
    name:       CategoryName;
    image:      string;
    creationAt: string;
    updatedAt:  string;
}

export enum CategoryName {
    Clothes = "Clothes",
    Electronics = "Electronics",
    Furniture = "Furniture",
    Others = "Others",
    Shoes = "Shoes",
}
