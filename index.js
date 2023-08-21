let total = 0;
let discount = 0;
let cuponUsed = false;
const listItems = document.getElementById("list-item");

// ==== utilities function 1 ==== 

function newDiscountAndTotal() {
    const discountPrice = document.getElementById("discount-price");
    if (cuponUsed) {
        discount = (total * 20) / 100;
        discountPrice.innerText = discount.toFixed(2);
    } else {
        discount = 0;
        discountPrice.innerText = discount.toFixed(2);
    }
    const grandTotal = document.getElementById("grand-total");
    const grandTotalValue = total - discount;
    grandTotal.innerText = grandTotalValue.toFixed(2);
}

// ==== utilities function 2 ====

function newTotal() {
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = total.toFixed(2);
    newDiscountAndTotal();
}

// ==== click handler function to get value from card ==== 

function clickHandler(target) {
    const count = listItems.childElementCount;
    const itemName = target.childNodes[5].innerText;
    const p = document.createElement("p");
    p.classList.add("my-2");
    p.innerHTML = `
      ${count+1}. ${itemName}
    `;
    listItems.appendChild(p);

    const price = target.childNodes[7].innerText.split(" ")[0];
    total += parseFloat(price);
    newTotal();

// ===   purchase button enable disable functionality ====
    
    const purchaseBtn = document.getElementById("purchase-btn")
    if (total > 0) {
        purchaseBtn.removeAttribute("disabled") ;
    }
    else {
        purchaseBtn.setAttribute("disabled",true);
    }

// ===  cupon button enable disable functionality ====
    
const cuponBtn = document.getElementById("cupon-btn");
if (total >= 200) {
    cuponBtn.removeAttribute("disabled");
}
else {
    cuponBtn.setAttribute("disabled", true);
    }  

}

// ==== apply button functionality ====

const cuponBtn = document.getElementById("cupon-btn");
cuponBtn.addEventListener('click', function () {
    const cuponField = document.getElementById("cupon-field")
   const cuponFieldValue = cuponField.value;
    if (cuponFieldValue === "SELL200" && total >= 200) {
        cuponUsed = true;
        newTotal();
        cuponField.value = '';    
    } else {
        alert("Wrong Coupon");
        cuponField.value = '';
   }
})
 
// ==== reset funtionality ====

function defaultHandler() {
    total = 0;
    discount = 0;
    cuponUsed = false;
    listItems.innerHTML = '';
    newTotal();
    const purchaseBtn = document.getElementById("purchase-btn")
    purchaseBtn.setAttribute("disabled", true);
    const cuponBtn = document.getElementById("cupon-btn");
    cuponBtn.setAttribute("disabled", true);
}