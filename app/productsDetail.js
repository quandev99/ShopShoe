import "regenerator-runtime/runtime";

import UrlHelper from "./helpers/UrlHelper";
import FirebaseConstants from "./constants/FirebaseConstants";
import ProductService from './services/ProductService';

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
$(document).ready(()=>{
    const productService = new ProductService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );
  try {
    const listProduct = $(".container_productsDetail");
    const url = location.href;
    const urlHelper = new UrlHelper();
    const idProduct = urlHelper.readPraram(url,"id");
    // console.log(idProduct);
      productService.findAllProducts().then((data) => {
        let productsDetail = "";
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // local

        productService.findById(idProduct).then((data) => {
          const {categoryId,productId,name,image,price,quantity,description} = data;   
            productsDetail +=                
                    `<div class="container__productsDetail_image">
                    <img src="${image}" alt="${image}">
                </div>
                <div class="container__productsDetail_des">
                    <h4 class="productsDetail-productsDetail_des-heading">
                    ${name}
                    </h4>
                    <p class="productsDetail-productsDetail_des-brand">
                        <strong>Thương Hiệu:</strong> ${name.slice(0,15)}
                    </p>
                    <p class="productsDetail-productsDetail_des-price">${formatNumber(price)} đ
                    </p>
                    <p class="productsDetail-productsDetail_des-products">
                      ${description}
                    </p>
                    <div class="productsDetail-productsDetail_des-container">
                        <h5 class="productsDetail-productsDetail_des-inShop" style="font-weight: bold;">Sản phẩm có
                            sẵn tại:</h5>
                        <p class="productsDetail-productsDetail_des-infor"> <strong>Phone: </strong><span
                                style="color: red;">
                                0932.307.248</span></a><a href="#" target="_blank"
                                title="143 Nguyễn Thị Thập - Hòa Minh - Đà Nẵng"> + 143 Nguyễn Thị
                                Thập - Hòa Minh -
                                Đà Nẵng</a>
                    </div>
                    <div class="input-group_buy">
                        <button type="button_quantity" class="btn btn-default" title="SL">-</button>
                        <input name="number_available" class="button_quantity" type="text" value="1" min="1"
                            placeholder="Số lượng" style="text-align: center;">
                        <button type="button_quantity" class="btn btn-default" title="SL">+</button>

                        <button class="buy_now add-to-cart-btn" data-huyit="${idProduct}">Mua Ngay</button>
                        </div>
                        `;
                        listProduct.append(productsDetail);

                        //   Add To Cart thôi
                        $(".add-to-cart-btn").click(function (event) {
                          const productId = $(this).data("huyit");
                          const products = data[productId];
                          console.log(productId);
                          console.log(products);
                          // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
                          const index = cartItems.findIndex(
                            (item) => item.productId === productId
                          );
                          if (index === -1) {
                            // Sản phẩm chưa có trong giỏ hàng
                            cartItems.push({
                              productId: productId,
                              products: products,
                              quantity: 1,
                            });
                          } else {
                            // Sản phẩm đã có trong giỏ hàng, tăng số lượng lên 1
                            cartItems[index].quantity++;
                          }
                        
                          // lưu giỏ hàng vào localStorage
                          localStorage.setItem("cartItems", JSON.stringify(cartItems));
                          alert("Thêm Sản Phẩm Thành Công");
                          location.href = "/addToCart.html";
                          event.preventDefault();
                        
                        });
                      });
      });   
    } catch (error) {
    console.log(error);
  }
});
