import { useAppDispatch, useAppSelector } from "../store.hooks"
import { getCardProducts, gettotalprice, removefromcard } from "./redux"

export const Card = () => {

    const cardProducts = useAppSelector(getCardProducts);
    const totalprice = useAppSelector(gettotalprice);

    const dispatch = useAppDispatch()

    const handleremovefromcard = (product_id: string) => {
       return dispatch(removefromcard(product_id))
    }

    return (
        <>
            <h2>Card</h2>
            <h5>{totalprice}</h5>
            {
                cardProducts.map((value) => (
                    <div key={value.id}>
                        <h6>{value.title}</h6>
                        <h6>{value.amount}</h6>
                        <button onClick={() => handleremovefromcard(value.id)}>Remove from card</button>
                    </div>
                ))
            }
        </>
    )
}