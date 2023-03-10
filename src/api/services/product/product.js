import {INSTANCE} from "../../constant/constantApi";

 const productDetail = ()=>{
    return INSTANCE.get('/products').then(data=>data.data)
}
export default productDetail();