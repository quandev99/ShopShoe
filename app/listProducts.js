import "regenerator-runtime/runtime";

import ProductService from './services/ProductService';
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';

$(document).ready(()=>{
        const productService = new ProductService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        const categoryService = new CategoryService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        
        try {
            const placeholder = $('#placeholder');
                        productService.findAllProducts().then((data) =>{
                            let list ='';
                        for(const id in data){
                            const element  = data[id];
                            // console.log(data);
                            const {categoryId,name,image,price,quantity,description} = element;
                            
                            list += `
                            <tr >
                            <td>${id}</td>
                            <td id="nameCate">${categoryId}</td>
                            <td>${name}</td>
                            <td>
                                <img style="width:80px" src="${image}" alt="Giày">
                            </td>
                            <td>${quantity}</td>
                            <td>${price}</td>
                            <td class="col-md-2" >${description}</td>
                            <td>
                                <a class="btn btn-success" href="../editProduct.html?id=${id}"> Edit</a>
                                <a class="btn btn-primary" href="../deleteProduct.html?id=${id}"> Xoá</a>
                            </td>
                            </tr>
                            `
                            }
                            placeholder.append(list);
                       
                        });    
        } catch (error) {
            console.log(error)
        };
        
});
        
        