import { Products } from "./model";

export const View = (props: Products) => (
    <div>
        <h2>Games List</h2>
        {
            props.products.map((value) => (
                <div key={value.id}>
                    <h3>{value.title} : {value.price}</h3>
                    <button onClick={() => props.addtocardhandler(value)}>Add to card</button>
                    <button onClick={() => props.hanlder_remove(value.id)}>Remove from store</button>
                </div>
            ))
        }
    </div>
)