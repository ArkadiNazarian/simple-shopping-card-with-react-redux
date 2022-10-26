import { FormikErrors } from "formik";

export interface Products {
    title: string;
    price: number;
    id: string;
}

export interface Iprops{
    action_submit:()=>void;
    form_data:Products;
    form_errors:FormikErrors<Products>;
    handleChange:(e:any)=>void;
}

export interface IProductsModel {
    title: string;
    price: number;
    id: string;
}