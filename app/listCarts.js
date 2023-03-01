const cartItems = JSON.parse(localStorage.getItem("cartItems"));
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
// Hiển thị thông tin giỏ hàng
const listCart = $("#cartItems");
const cart_empty = $('.cart_empty');
let list = "";
let totalPrice = 0;
let soluong1 = 0;
if (cartItems){
  cart_empty.hide()
  cartItems.forEach((item) => {
    totalPrice = totalPrice + (item.products.price) * (item.quantity);
  });
  cartItems.forEach((item) => {
    soluong1 += item.quantity;
  });
  for (const id of cartItems) {
    list += `
      <tr class="text-center">
          <td scope="row">${id.productId}</td>
          <td><img width="150" src="${id.products.image}"></td>
          <td>${id.products.name}</td>
          <td >${id.quantity}</td>
          <td>${formatNumber(id.products.price * id.quantity)}đ</td>
          <td>
            <button class="btn btn-primary removeButton" data-productid="${
              id.productId
            }">Delete</a>
          </td>
      </tr>  
      `;
  }
}else {
  cart_empty.show();
}

$("#totalPrice").text(`Tổng Tiền : ${formatNumber(totalPrice)} đ`);
$(".soluong").text(`${soluong1}`);

listCart.append(list); // list ra html
$(".removeButton").on("click", function () {
  location.reload(true)
  const productId = $(this).data("productid");
  console.log(productId);
  const index = cartItems.findIndex((item) => item.productId === productId);
  // console.log(index);
  if (index !== -1) {
    cartItems.splice(index, 1); // xóa sản phẩm trên localstorrge
    console.log(cartItems.splice(index, 1));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    $(this).closest("tr").remove(); // xóa trên trình duyệt người dùng
    totalPrice = totalPrice - cartItems[index].products.price;
    $("#totalPrice").text(`Tổng Tiền : ${formatNumber(totalPrice)} đ`); // cập nhật lại tổng tiền
    location.href = "addToCart.html.html";
  }
  
});
