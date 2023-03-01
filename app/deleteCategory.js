import "regenerator-runtime/runtime";

import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';
import UrlHelper from "./helpers/UrlHelper";

$(document).ready(()=>{
    const categoryService = new CategoryService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );

    const url = location.href;
    const urlHelper = new UrlHelper();
    const id = urlHelper.readPraram(url,"id");
        
   
    let choice = confirm("Bạn có muốn xóa danh mục này không!");
    if (choice == true){
        categoryService.deleteCategory(id).then((data) => {
            location.href = "listCategories.html";
        });
    }
    location.href = "listCategories.html";
});
