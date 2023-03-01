import "regenerator-runtime/runtime";

import Category from './models/Category';
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(()=>{
    const categoryService = new CategoryService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );

    const url = location.href;
    console.log(url);
    const urlHelper = new UrlHelper();
    const id = urlHelper.readPraram(url,"id");
    const categoryIdCtr = $("#categoryId");
    const nameCtr = $("#name");
    const editCtr = $("#edit");
    
    categoryService.findById(id).then((data) => {
        const {name} = data;
        categoryIdCtr.val(id); 
        nameCtr.val(name); 
    });

    $(editCtr).on("click",()=>{
        const cate = new Category(null,nameCtr.val());
        if (nameCtr === "") {
            nameError.innerHTML = "Vui lòng sửa danh mục sản phẩm!";
        } else {
            nameError.innerHTML = "";
            try {
                categoryService.updateCategory(categoryIdCtr.val(),cate).then((data) =>{
                    // alert("Update Thành Công!");
                    location.href = "listCategories.html";
                });
            } catch (error) {
                console.log(error)
            };
        }
    });
});
