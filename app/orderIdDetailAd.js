import "regenerator-runtime/runtime";

import UrlHelper from "./helpers/UrlHelper";
import FirebaseConstants from './constants/FirebaseConstants';
import OrderService from './services/OrderService';
import OrderDetailService from './services/OrderDetailService';

$(document).ready(()=>{
        
        const orderService = new OrderService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        const orderDetailService = new OrderDetailService(
            FirebaseConstants.RealTimeDB,
            "Token"
        );
        
        try {
            const url = location.href;
            const urlHelper = new UrlHelper();
            const idOrder = urlHelper.readPraram(url,"id");

            const placeholder = $('#placeholder');
            orderDetailService.findById(idOrder).then(data => {
                console.log(data);
                let list ='';
                        for(const id in data){
                            const element  = data[id];
                            // console.log(data);
                            const {order_id, product_id, quantity, unit_price} = element;
                            list += `
                            <tr >
                            <td>${order_id}<br> ${product_id} <br>${id}</td>
                            <td>${quantity}</td>
                            <td>${unit_price}</td>
                            <td>
                                <a class="btn btn-success" href="">Chi Tiết</a>
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
        
        