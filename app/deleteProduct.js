import "regenerator-runtime/runtime";

import UrlHelper from "./helpers/UrlHelper";
import FirebaseConstants from './constants/FirebaseConstants';
import ProductServivce from './services/ProductService';

$(document).ready(()=>{
    const url = location.href;
    const urlHelper = new UrlHelper();
    const id = urlHelper.readPraram(url,"id");
        
    const productServivce = new ProductServivce(
        FirebaseConstants.RealTimeDB,
        "Token"
    );
        let choice = confirm("Bạn có muốn xóa sản phẩm này không!");
        if (choice == true){
            productServivce.deleteProduct(id).then((data) => {
                location.href = "listProducts.html";
            });
        }
        location.href = "listProducts.html";
    
});
