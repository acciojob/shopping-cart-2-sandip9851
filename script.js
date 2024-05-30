const name = document.querySelector("#item-name-input");
const price = document.querySelector("#item-price-input");
const table =  document.querySelector("#cart-item");
const btn = document.querySelector("#btn");
const grandTotal = document.querySelector("[data-ns-test=grandTotal]"); // grand total element
let total = 0;

btn.addEventListener("click",()=>{
    let itemName = name.value;
    let itemPrice = Number(price.value);
    total += itemPrice;
    let tbody = table.querySelector("tbody") || table.appendChild(document.createElement('tbody'));
    tbody.innerHTML += `
        <tr>
            <td data-ns-test="item-name">${itemName}</td>
            <td data-ns-test="item-price">${itemPrice}</td>
        </tr>
    `;
    grandTotal.innerText = total; // update the grand total
    name.value = '';
    price.value = '';
})