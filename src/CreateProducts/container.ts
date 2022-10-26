import { addProduct } from './redux'
import { useAppDispatch } from '../redux-hooks'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { IProductsModel } from './model';

export const useContainer =()=>{
    const dispatch = useAppDispatch();

    const initial_values = {
        id: "",
        title: "",
        price: 0
    }

    const validation_schema = Yup.object().shape({
        id: Yup.string().required(),
        title: Yup.string().required(),
        price:Yup.number().required()
    });

    const action_submit =(product: IProductsModel)=>{
        dispatch(addProduct(product))
    }

    

    const formik = useFormik({
        initialValues: initial_values,
        validationSchema: validation_schema,
        onSubmit: action_submit
    });

    return{
        action_submit: formik.handleSubmit,
        form_data: formik.values,
        form_errors: formik.errors,
        handleChange: formik.handleChange
    }

}