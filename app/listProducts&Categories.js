import "regenerator-runtime/runtime";

import UrlHelper from "./helpers/UrlHelper";
import FirebaseConstants from "./constants/FirebaseConstants";
import CategoryService from './services/CategoryService';
import ProductService from './services/ProductService';
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
$(document).ready(()=>{
    const categoryService = new CategoryService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );
    const productService = new ProductService(
        FirebaseConstants.RealTimeDB,
        "Token"
    );
  try {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // local

    const listProduct = $(".listProducts");
    const listCategory = $(".menu_list");
    categoryService.findAllCategories().then((data) => {
      // console.log(data);
      let listCate = "";
      for (const idCate in data) {
        const element  = data[idCate];
        const {name} = element;
        listCate += `<li>
        <a class="category-item" href="index.html?id=${idCate}">${name}</a>
                    </li>`;
      }
      listCategory.append(listCate); // list ra html
    });
    const url = location.href;
    const urlHelper = new UrlHelper();
    const idCategory = urlHelper.readPraram(url,"id");

      productService.findAllProducts().then((data) => {
        let productItem = "";
        for (const id in data) {
              const element = data[id];
            
              const {categoryId,name,image,price,quantity,description} = element;
              if (categoryId === idCategory){
                productItem += 
                `<li>  
                <div class="product-item-top">
                    <div class="hot">
                        <p>Hot</p>
                    </div>
                    <a href="productsDetail.html?id=${id}">
                        <img src="${image}" alt="${name}">
                    </a>
                    <a class="muangay add-to-cart-btn" data-huyit="${id}">Thêm vào giỏ hàng</a>
                </div>
                <div class="product-item-down">
                    <h3>${name}</h3>
                    <div class="price-if">
                        <a class="chitiet" href="productsDetail.html?id=${id}">
                            Xem chi tiết</a>
                        <p style="color:#f25862;">${formatNumber(price)} đ</p>
                    </div>
                </div>
                </li>
                `;
              } else if(!idCategory) {
                productItem += 
                `<li>  
                <div class="product-item-top">
                    <div class="hot">
                        <p>Hot</p>
                    </div>
                    <a href="productsDetail.html?id=${id}">
                        <img src="${image}" alt="${name}">
                    </a>
                    <a class="muangay add-to-cart-btn" data-huyit="${id}">Thêm vào giỏ hàng</a>
                </div>
                <div class="product-item-down">
                    <h3>${name}</h3>
                    <div class="price-if">
                    <a class="chitiet" href="productsDetail.html?id=${id}">
                            Xem chi tiết</a>
                        <p style="color:#f25862;">${formatNumber(price)} đ</p>
                    </div>
                </div>
                </li>
                `;
              } 
        }
        listProduct.append(productItem);


      // lọc sản phẩm theo giá
      $("#filter-form").submit(function (event) {
        event.preventDefault();
        const lowPrice = $("#min-price").val();
        const highPrice = $("#max-price").val();
        let filteredData = data;
        if(lowPrice.length == "" || highPrice.length == ""){
          alert("Không được bỏ trống giá")
        }else if(lowPrice < 0 || highPrice < 0){
          alert("Giá phải lớn hơn > 0")
        }else if(lowPrice > highPrice){
          alert("So sánh giá bé phải nhỏ hơn so sánh giá lớn!")
        }else{
          if (lowPrice && highPrice) {
            filteredData = Object.values(data).filter(
              (products) =>
                products.price >= lowPrice &&
                products.price <= highPrice
            );
          }
        }

        listProduct.empty();
        productService.findAllProducts().then((filteredData) => {
        let filteredList = "";
        for (const id in filteredData) {
          const element = filteredData[id];
          const {categoryId,name,image,price,quantity,description} = element;
          filteredList += `
          <li>  
          <div class="product-item-top">
              <div class="hot">
                  <p>Hot</p>
              </div>
              <a href="productsDetail.html?id=${id}">
                  <img src="${image}" alt="${name}">
              </a>
              <a class="muangay add-to-cart-btn" data-huyit="${id}">Thêm vào giỏ hàng</a>
          </div>
          <div class="product-item-down">
              <h3>${name}</h3>
              <div class="price-if">
              <a class="chitiet" href="productsDetail.html?id=${id}">
                      Xem chi tiết</a>
                  <p style="color:#f25862;">${formatNumber(price)} đ</p>
              </div>
          </div>
          </li>
          `;
          }
        listProduct.append(filteredList);
        });
      });


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
      location.href = "addToCart.html";
      console.log(cartItems); // log ra huy nhé
      event.preventDefault();
    });

      });
  } catch (error) {
    console.log(error);
  }
});
