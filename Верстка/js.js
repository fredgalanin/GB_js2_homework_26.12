'use strict';
import * as productBlock from "./productsBlocks.js";
import * as productsData from "./getData.js";


const productsBlock = new productBlock.ProductList(productsData._structureProducts()[0]);
const browseBtn = document.querySelector(".button-main-hover");

browseBtn.addEventListener('click', () => {
    for (const block of productsData._structureProducts().slice(1)) {
        new productBlock.ProductList(block);
    }
    browseBtn.style.display = 'none';
})

