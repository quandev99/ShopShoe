* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #f3f3f3;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: normal;
}

img {
  max-width: 100%;
  display: block;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

#wrapper {
  background-color: #fff;
}

.header-top {
  width: 100%;
  height: 60px;
  background-color: #fff;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.header-admin {
  height: 6rem;
  display: flex;
}

.header-admin-left {
  width: 50%;
  height: 6rem;
  justify-content: space-around;
  align-items: center;
  display: flex;
}

.header-admin-left img {
  width: 15px;
}

.header-admin-right {
  width: 50%;
  height: 6rem;
}

.header-admin-right ul {
  height: 6rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  display: flex;
}

.header-admin-right ul li {
  border-right: .3px solid #adadad;
  padding: 15px;
}

.header-admin-right ul li i {
  color: #111;
}

.header-admin-right ul li i:hover {
  color: #f25862;
}

.header-dow {
  height: 8rem;
  background-color: #e5e5e5;
}

.menu {
  height: 8rem;
  display: flex;
}

.logo-shop {
  width: 25rem;
}

.logo-shop img {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.menu-list ul {
  height: 8rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.menu-list ul li {
  padding: 25px;
  display: block;
}

.menu-list ul li a {
  color: #444;
  font-size: 16px;
  font-weight: bold;
  display: block;
}

.menu-list ul li a:hover {
  color: #f25862;
}

ul.sup_menu {
  display: none;
  position: relative;
}

.productsDetail {
  margin: 5rem 0;
}

.productsDetail_title {
  color: #333;
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 600;
}

.container_productsDetail {
  width: 100%;
}

.productsDetail_title > span {
  color: #f25862;
  font-size: 5rem;
  font-weight: bold;
}

.container_productsDetail {
  height: 100%;
  display: flex;
}

.container__productsDetail_image {
  width: 40%;
}

.container__productsDetail_image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.container__productsDetail_des {
  width: 60%;
  margin-left: 2rem;
}

.productsDetail-productsDetail_des-heading {
  text-transform: uppercase;
  margin-bottom: 32px;
  padding: 0;
  font-size: 24px;
  font-weight: 400;
}

.productsDetail-productsDetail_des-brand {
  border-bottom: 1px solid #eee;
  margin-bottom: 1.5rem;
  padding-bottom: .8rem;
}

.productsDetail-productsDetail_des-price {
  color: #f25862;
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.4rem;
}

.productsDetail-productsDetail_des-products {
  height: 16px;
  margin-bottom: 2.5rem;
  font-size: 13px;
  line-height: 16px;
  display: block;
}

.productsDetail-productsDetail_des-container {
  margin-bottom: 2rem;
}

.productsDetail-productsDetail_des-inShop {
  color: #686868;
  background-color: #fff;
  border: 1px solid #dbd8d8;
  padding: 1rem;
  font-size: 1.8rem;
}

.productsDetail-productsDetail_des-infor {
  color: #686868;
  background-color: #eee;
  border: 1px solid #dbd8d8;
  padding: 1rem;
  font-size: 1.4rem;
}

.productsDetail-productsDetail_des-infor > a {
  color: #686868;
  font-size: 1.3rem;
}

.input-group_buy {
  display: flex;
}

.btn-default {
  cursor: pointer;
  padding: 1rem 1.5rem;
}

.button_quantity {
  width: 5rem;
}

.buy_now {
  color: #fff;
  cursor: pointer;
  background-color: #f25862;
  border: none;
  margin-left: .8rem;
  padding: 0 1rem;
}

.footer-navbar {
  height: 330px;
  background: linear-gradient(90deg, #232222 50%, #1d1d1d 50%);
  margin-top: 50px;
}

.list-navbar {
  justify-content: space-between;
  display: flex;
}

.item-footer {
  width: calc(25% - 20px);
}

.logo-shop-footer a {
  height: 105px;
}

.logo-shop-footer a img {
  height: 100%;
  background-color: #232222;
}

.address-contact h3 {
  text-transform: uppercase;
  color: #a8a8a8;
  border-top: 1px solid #a8a8a8;
  margin: 20px 0 10px;
  padding: 10px 0 0;
  font-size: 14px;
  font-weight: bold;
}

.address-contact p {
  color: #a8a8a8;
  background: #383838;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 34px;
}

.address-contact i {
  width: 25px;
  height: 25px;
  color: #f8f8f8;
  background-color: #6a6a6a;
  margin-right: 12px;
  padding: 5px;
}

.item-footer > h3 {
  text-transform: uppercase;
  color: #a8a8a8;
  border-top: 1px solid #a8a8a8;
  margin: 30px 0 40px;
  padding: 10px 0 0;
  font-size: 14px;
  font-weight: bold;
}

.list-menu-footer ul a {
  color: #a8a8a8;
  width: 100%;
  border-bottom: 1px solid #363636;
  font-size: 13px;
  line-height: 40px;
  display: inline-block;
}

.footer-ifdesign {
  height: 75px;
  background-color: #111;
  display: flex;
}

.container-ifdesign {
  height: 75px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.footer-ifdesign p {
  color: #a8a8a8;
  text-transform: uppercase;
  padding-left: 15px;
  font-size: 13px;
}

/*# sourceMappingURL=productsDetail.2c57eab7.css.map */
