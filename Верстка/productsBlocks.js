'use strict';
import * as productsData from "./getData.js";

export class ProductList {
    constructor(list, container = '.items-container') {
        this.container = container;
        this.goodsList = list;
        this.allProducts = []; //складываются готовые и обработанные экземпляры товаров
        this.render();
    }


    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goodsList) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML("beforeend", productObject.render());
        }
    }
}

export class ProductItem {
    constructor(product) {
        this.itemId = product.itemId;
        this.itemName = product.itemName;
        this.itemPrice = product.itemPrice;
    }

    render() {
        return `                    <div class="item-block">
                                    <div class="item-container">
                                        <a class="item" href="#">
                                            <img class="product-img" src="img/Layer_${this.itemId+1}.jpg" alt="">
                                            <div class="item-text">
                                                <p class="black-text-item">${this.itemName}</p>
                                                <p class="pink-text-item">${this.itemPrice}</p>
                                            </div>
                                        </a>
                                        <div class="add-parent">
                                            <a class="add-button" href="#">
                                                <img class="add-button-cart-img" src="img/Forma_1_copy.svg" alt="">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div> 
                                  </div>   `
    }
}
