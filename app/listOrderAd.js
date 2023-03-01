import "regenerator-runtime/runtime";

import ProductService from './services/ProductService';
import CategoryService from './services/CategoryService';
import FirebaseConstants from './constants/FirebaseConstants';
import OrderService from './services/OrderService';

$(document).ready(()=>{
        const productService = new ProductService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        const orderService = new OrderService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        
        try {
            const placeholder = $('#placeholder');
            orderService.findAllUsers().then((data) =>{
                            let list ='';
                        for(const id in data){
                            const element  = data[id];
                            // console.log(data);
                            const {customer_name,customer_address,customer_email,customer_phone_number,created_date,status} = element;
                            
                            list += `
                            <tr >
                            <td>${id}</td>
                            <td>${customer_name}</td>
                            <td>${customer_address}</td>
                            <td>${customer_email}</td>
                            <td>${customer_phone_number}</td>
                            <td>${created_date}</td>
                            <td>${status}</td>
                            <td>
                                <a class="btn btn-success" href="orderIdDetailAd.html?id=${id}">Chi Tiết</a>
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
        
        