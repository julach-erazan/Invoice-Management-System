import * as yup from "yup";


export const addBrandSchema = yup.object().shape({
    brandName: yup.string().required("Required"),
});