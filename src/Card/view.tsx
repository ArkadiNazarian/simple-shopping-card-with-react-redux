import { IModel } from "./model"

export const View = (props:IModel) => {
    return (
        <>
            <h2>Card</h2>
            <h5>{props.totalprice}</h5>
            {
                props.cardProducts.map((value) => (
                    <div key={value.id}>
                        <h6>{value.title}</h6>
                        <h6>{value.amount}</h6>
                        <button onClick={() => props.handleremovefromcard(value.id)}>Remove from card</button>
                    </div>
                ))
            }
        </>
    )
}