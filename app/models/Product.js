export default class Product{
    constructor(categoryId,productId,name,image,description,price,quantity){
        this.productId = productId;
        this.categoryId = categoryId;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}