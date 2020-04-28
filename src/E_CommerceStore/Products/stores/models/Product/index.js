import { observable } from "mobx";

class Product {

    @observable productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL

    constructor(Data) {
        this.productId = Data.id;
        this.availableSizes = Data.availableSizes;
        this.currencyFormat = Data.currencyFormat;
        this.currencyId = Data.currencyId;
        this.description = Data.description;
        this.installmentsCount = Data.installments;
        this.isFreeShipping = Data.isFreeShipping;
        this.price = Data.price;
        this.printStyle = Data.style;
        this.title = Data.title;
        this.imageURL = Data.image;
    }
}

export default Product;
