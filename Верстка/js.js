'use strict';


const productList = [
    {itemId: 1,
        itemName: 'mango people t-shirt',
    itemPrice: '52$',
    },
    {itemId: 2,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 3,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 4,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 5,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 6,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 7,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
    {itemId: 8,
        itemName: 'mango people t-shirt',
        itemPrice: '52$',
    },
];




function renderProductBlock(itemId, itemName, itemPrice) {
    return `                    <div class="item-block">
                                    <div class="item-container">
                                        <a class="item" href="#">
                                            <img class="product-img" src="img/Layer_${itemId+1}.jpg" alt="">
                                            <div class="item-text">
                                                <p class="black-text-item">${itemName}</p>
                                                <p class="pink-text-item">${itemPrice}</p>
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


function renderProductsContainer(listOfProducts) {
    const list = listOfProducts.map(item => renderProductBlock(item.itemId, item.itemName, item.itemPrice)).join('');
    document.querySelector('.items-container').innerHTML = list;

}



renderProductsContainer(productList);