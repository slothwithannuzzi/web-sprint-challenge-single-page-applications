import * as yup from 'yup'

export const schema = yup.object().shape({
    size: yup.string().oneOf(['small', 'medium', 'large', 'x-large']).required('Size is required'),
    sauce: yup.string().oneOf(['original-red', 'garlic-ranch', 'BBQ', 'spinach-alfredo']).required(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    jalapeno: yup.boolean(),
    goatCheese: yup.boolean(),
    bacon: yup.boolean(),
    anchovies: yup.boolean(),
    glutenFree: yup.boolean(),
    instructions: yup.string(),
    name: yup.string().min(2, "name must be at least 2 characters").required('Name is required for order!')
})