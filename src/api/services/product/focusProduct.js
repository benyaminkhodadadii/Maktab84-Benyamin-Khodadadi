import {INSTANCE} from "../../constant/constantApi";

const focusProduct = ()=>{
    return INSTANCE.get('/focusProduct')
}
export default focusProduct();