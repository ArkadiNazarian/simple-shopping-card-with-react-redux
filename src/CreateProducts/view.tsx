import { Iprops } from "./model"

export const View = (props:Iprops) => {
    return (
        <>
            <h2>Add Game to the Store</h2>
            <form onSubmit={props.action_submit}>
                <input type="text" placeholder='Game title' name='title' value={props.form_data.title} onChange={props.handleChange} />
                <input type="number" placeholder='Price' name='price' value={props.form_data.price} onChange={props.handleChange} />
                <input type="text" placeholder='Id' name='id' value={props.form_data.id} onChange={props.handleChange} />
                <button type='submit'>Add product</button>
            </form>
        </>
    )
}