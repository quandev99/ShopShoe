// console.log("Xin chao, Toi la Quan");
import FirebaseConstants from "./constants/FirebaseConstants";
import ProductService from "./services/ProductService";
import CategoryService from "./services/CategoryService";
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
$(document).ready(function () {
  const productService = new ProductService(
    FirebaseConstants.RealTimeDB,
    "Token"
  );
  const categoryService = new CategoryService(
    FirebaseConstants.RealTimeDB,
    "Token"
  );
  try {
    const listProduct = $(".market-product");

    // List Sản Phẩm
    productService.findAllProducts().then((data) => {
      console.log(data);
      // list product
      let list = "";
      for (const id in data) {
        const element = data[id];
        const {categoryId,name,image,price,quantity,description} = element;
        list += `<li>  
        <div class="product-item-top" id="abc">
            <div class="hot">
                <p>Hot</p>
            </div>
            <a href="">
                <img src="${image}" alt="${name}">
            </a>
            <button class="muangay" data-huyit="${id}">Thêm vào giỏ hàng</a>
        </div>
        <div class="product-item-down">
            <h3>${name}</h3>
            <div class="price-if">
                <p style="text-decoration: line-through;color:rgb(164, 164, 164);font-weight: 100;font-style: italic;">
                    640,000 đ</p>
                <p style="color:#f25862;">${formatNumber(price)} đ</p>
            </div>
        </div>
        </li>
        `;
      }
    //   
    listProduct.append(list);
    });

  } catch (error) {
    console.log(error);
  }
});
