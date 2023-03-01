import "regenerator-runtime/runtime";


import FirebaseConstants from './constants/FirebaseConstants';
import UrlHelper from "./helpers/UrlHelper";
import Product from "./models/Product";
import ProductServivce from './services/ProductService';

$(document).ready(()=>{
    
    const productService = new ProductServivce(
        FirebaseConstants.RealTimeDB,
        "Token"
    );

    const url = location.href;
    const urlHelper = new UrlHelper();
    const id = urlHelper.readPraram(url,"id");
    const categoryIdCtr = $("#categoryId");
    const productIdCtr = $("#productId");
    const nameCtr = $("#name");
    const imageCrt = $("#image");
    const descriptionCtr = $("#description");
    const quantityCtr = $("#quantity");
    const priceCrt = $("#price");

    const editCtr = $("#edit");
    productService.findById(id).then((data) => {
        const {categoryId,name,image,price,quantity,description} = data;
        categoryIdCtr.val(categoryId); 
        productIdCtr.val(id); 
        descriptionCtr.val(description); 
        quantityCtr.val(quantity); 
        priceCrt.val(price); 
        nameCtr.val(name); 
        imageCrt.val(image); 
    });
    
    $(editCtr).on("click",()=>{
        const product = new Product(categoryIdCtr.val(),null,nameCtr.val(),imageCrt.val(),descriptionCtr.val(),priceCrt.val(),quantityCtr.val());
        
        try {
            productService.updateProduct(productIdCtr.val(),product).then((data) =>{
                alert("Update Thành Công");
                location.href = "listProducts.html";
            });
        } catch (error) {
            console.log(error);
        };
    });
});
