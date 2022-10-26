import { useAppDispatch, useAppSelector } from "../redux-hooks"
import { getCardProducts, gettotalprice, removefromcard } from "./redux"

export const useContainer=()=>{

    const cardProducts = useAppSelector(getCardProducts);
    const totalprice = useAppSelector(gettotalprice);

    const dispatch = useAppDispatch()

    const handleremovefromcard = (product_id: string) => {
       return dispatch(removefromcard(product_id))
    }

    return{
        cardProducts,
        totalprice,
        handleremovefromcard
    }
}