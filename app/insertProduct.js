import "regenerator-runtime/runtime";

import Product from './models/Product';
import ProductService from './services/ProductService';
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';

$(document).ready(()=>{
    const categoryService = new CategoryService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );

    const productService = new ProductService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );

    const categoryIdCtr = $("#categoryId");
    categoryService.findAllCategories().then((data) => {
        let list = "";
        for (const key in data){
            const elment = data[key];
            const {name} = elment;
            list += `<option value='${key}'>${key} - ${name}</option>`;
        }
        categoryIdCtr.append(list);
    });
    
    
    $('#save').on('click',()=>{
        const name  = $("#name").val();
        const imageCrt  = $("#image").val();
        const productIdCtr  = $("#productId");
        const quantity  = $("#quantity").val();
        const price  = $("#price").val();
        const description  = $("#description").val();

        const product  =  new Product(categoryIdCtr.val(),null,name,imageCrt,description,price,quantity);

        if(categoryIdCtr.val() ==""){
            categoryIdError.innerHTML = "Vui lòng chọn danh mục sản phẩm!";
        }else{
            categoryIdError.innerHTML = ""
        }
        if(name === ""){
            nameCateError.innerHTML = "Vui lòng nhập tên sản phẩm!";
        }else{
            nameCateError.innerHTML = ""
        }
        if(imageCrt === ""){
            imageError.innerHTML = "Vui lòng tải tệp ảnh lên!";
        }else{
            imageError.innerHTML = ""
        }
        if(quantity === ""){
            quantityError.innerHTML = "Vui lòng nhập số lượng!";
        }else if(quantity<1){
            quantityError.innerHTML = "Số lượng phải lớn hơn 0!";
        }else if(!Number(quantity)){
            quantityError.innerHTML = "Số lượng phải có giá trị là Number!";
        }
        else{
            quantityError.innerHTML = ""
        }
        if(price === ""){
            priceError.innerHTML = "Vui lòng nhập giá!";
        }else if(price < 0){
            quantityError.innerHTML = "Giá tiền phải lớn hơn 0!";
        }else if(!Number(price)){
            quantityError.innerHTML = "Giá tiền phải có giá trị là Number!";
        
        }else{
            priceError.innerHTML = ""
        }
        if(description === ""){
            descriptionError.innerHTML = "Vui lòng nhập số lượng!";
        }else{
            descriptionError.innerHTML = ""
        }
        if(categoryIdCtr !== "" && name !== "" && imageCrt !== "" && quantity !== "" && description !== "" > 0){
            
            try {
                productService.insertProduct(product).then((data) => {
                    // productIdCtr.val(data)
                    alert("Thêm sản phẩm thành công");
                    location.href = "listProducts.html";
            })
            } catch (error) {
            console.log(error);
            };
        }

    });
});
