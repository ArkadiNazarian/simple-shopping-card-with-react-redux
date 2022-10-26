import { useSelector } from "react-redux";
import { getProductsSelector, removeProduct } from "../CreateProducts/redux";
import { IProductsModel } from './model'
import { addtocard } from "../Card/redux";
import { useAppDispatch } from '../redux-hooks'
export const useContainer = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(getProductsSelector);

    const hanlder_remove = (id: string) => {
        dispatch(removeProduct(id))
    }

    const addtocardhandler = (product: IProductsModel) => {
        dispatch(addtocard(product))
    }

    return {
        products,
        hanlder_remove,
        addtocardhandler
    }
}