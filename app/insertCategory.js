import "regenerator-runtime/runtime";

import Category from './models/Category';
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';

$(document).ready(()=>{
    $('#save').on('click',()=>{
        const categoryIdCtr = $("#categoryId");
        const name  = $("#name").val();
        const cate  =  new Category(null,name);

        const categoryService = new CategoryService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        if (name === "") {
        nameError.innerHTML = "Vui lòng nhập danh mục sản phẩm!";
        } else {
        nameError.innerHTML = "";
            try {
                categoryService.insertCategory(cate).then((data) =>{
                    categoryIdCtr.val();
                });
            location.href = "listCategories.html";
            } catch (error) {
            console.log(error);
            };
        }
    });
});
