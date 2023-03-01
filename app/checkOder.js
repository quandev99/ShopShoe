import FirebaseConstants from "./constants/FirebaseConstants";
import OrderService from "./services/OrderService";
import OrderDetailService from "./services/OrderDetailService";
import Orders from "./models/Orders";
import OrderDetails from "./models/OrderDetails";

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
// Hiển thị thông tin giỏ hàng
const listCart = $(".listCart");
let list = "";
let totalPrice = 0;
cartItems.forEach((item) => {
  totalPrice = totalPrice + item.products.price * item.quantity;
});
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
for (const huydev of cartItems) {
  list += `
  <div class="d-flex align-items-center pb-2 border-bottom">
    <a class="d-block flex-shrink-0 mr-2" href="#"
      ><img
        class="rounded-1"
        src="${huydev.products.image}"
        width="64"
        alt="${huydev.products.name}"
    /></a>
    <div class="ps-1">
      <h6 class="widget-product-title">
        <a href="#">${huydev.products.name}</a>
      </h6>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <span class="text-accent border-end pr-2 mr-2"
          >${formatNumber(huydev.products.price * huydev.quantity)}</span
        ><span class="text-end">${huydev.quantity}</span>
      </div>
    </div>
  </div>
`;
}
$("#totalPrice").text("Tổng Tiền :" + " " + formatNumber(totalPrice));
listCart.append(list); // list ra html

// lấy tt người dùng và sản phẩm
$("#addOrder").on("click", () => {
  const orderService = new OrderService(FirebaseConstants.RealTimeDB, "Token");
  const orderDetailService = new OrderDetailService(
    FirebaseConstants.RealTimeDB,
    "Token"
  );
  const idOrder = $("#idOrder");
  const name = $("#name").val();
  const phone = $("#phone").val();
  const email = $("#email").val();
  const address = $("#address").val();
  const date = new Date().toISOString();
  function isPhone(phone) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone);
  }
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
  //   Lấy thông tin khách hàng
  const orders = new Orders(
    null,
    name,
    address,
    email,
    phone,
    date,
    "Thành Công"
  );
  if (name === "") {
    nameError.innerHTML = "Vui lòng nhập mã sách";
  } else {
    nameError.innerHTML = "";
  }
  if (phone === "") {
    phoneError.innerHTML = "Vui lòng nhập số điện thoại";
  } else if(!isPhone(phone)){
    phoneError.innerHTML = "Số điện thoại không đúng định dạng";
  } else {
    phoneError.innerHTML = "";
  }

  if (email === "") {
    emailError.innerHTML = "Vui lòng nhập email";
  }else if (!isEmail(email)) {
    emailError.innerHTML = "Email không đúng định dạng";
  } else {
    emailError.innerHTML = "";
  }

  if (address === "") {
    addressError.innerHTML = "Vui lòng nhập địa chỉ";
  } else {
    addressError.innerHTML = "";
  }


  if (name !== "" && phone !== "" && email !== "" && address > 0) {
    try {
      orderService.insertUsers(orders).then((data) => {
        idOrder.val(data);
        for (const products of cartItems) {
          const orderDetail = new OrderDetails(
            data, // data idOrder
            products.productId,
            products.quantity,
            products.products.price
          );
          orderDetailService.insertOrder(orderDetail).then((data) => {
            console.log(data);
          });
        }
        window.localStorage.clear();
        alert("Thanh Toán Thành Công");
        location.href = "orderSucses.html";
      });
    } catch (error) {
      console.log(error);
    }
  }
});
