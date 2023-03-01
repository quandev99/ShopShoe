import "regenerator-runtime/runtime";

import OrderDetailService from './services/OrderDetailService';
import FirebaseConstants from './constants/FirebaseConstants';

$(document).ready(()=>{
        
        const orderDetailService = new OrderDetailService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
          
        try {
            const placeholder = $('#placeholder');
            orderDetailService.findAllOrder().then((data) =>{
                            let list ='';
                        for(const id in data){
                            const element  = data[id];
                            const {order_id, product_id, quantity, unit_price} = element;
                            console.log(data);
                            
                            list += `
                            <tr >
                            <td>${order_id}<br> ${product_id} <br>${id}</td>
                            <td>${quantity}</td>
                            <td>${unit_price}</td>
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
        
        