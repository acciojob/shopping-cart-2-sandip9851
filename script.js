const name = document.querySelector("#item-name-input");
const price = document.querySelector("#item-price-input");
const table =  document.querySelector("#cart-item");
const btn = document.querySelector("#btn");
let total = 0;

btn.addEventListener("click",()=>{
    let itemName = name.value;
    let itemPrice = Number(price.value); // convert the price to a number
    total += itemPrice;
    let tbody = table.querySelector("tbody") || table.appendChild(document.createElement('tbody')); // get the tbody or create one if it doesn't exist
    tbody.innerHTML += `
        <tr>
            <td data-ns-test="item-name">${itemName}</td>
            <td data-ns-test="item-price">${itemPrice}</td>
            <td data-ns-test="grandTotal">${total}</td>
        </tr>
    `;
    name.value = ''; // clear the input fields
    price.value = '';
})