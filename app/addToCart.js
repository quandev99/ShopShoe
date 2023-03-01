
$(document).ready(function () {
 
  try {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // local

      //   Add To Cart thôi
      $(".add-to-cart-btn").click(function (event) {
        const productId = $(this).data("huyit");
        const products = data[productId];
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
        console.log(cartItems); // log ra 
        event.preventDefault();
      });
    
  } catch (error) {
    console.log(error);
  }
});
