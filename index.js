let total = 0;
function clickHandler(target) {
    const listItems = document.getElementById("list-item");
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
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = total.toFixed(2);


    const purchaseBtn = document.getElementById("purchase-btn")
    if (total > 0) {
        purchaseBtn.removeAttribute("disabled") ;
    }
    else {
        purchaseBtn.setAttribute("disabled",true);
    }

const cuponBtn = document.getElementById("cupon-btn");
if (total >= 200) {
    cuponBtn.removeAttribute("disabled");
}
else {
    cuponBtn.setAttribute("disabled", true);
    }  
}

const cuponBtn = document.getElementById("cupon-btn");
cuponBtn.addEventListener('click', function () {
    const cuponField = document.getElementById("cupon-field")
   const cuponFieldValue = cuponField.value;
   const discountPrice = document.getElementById("discount-price");
    const grandTotal = document.getElementById("grand-total");
    if (cuponFieldValue === "SELL200" && total >= 200) {
        const discount = (total * 20)/100
        discountPrice.innerText = discount.toFixed(2);
        const grandTotalPrice = total - discount;
        grandTotal.innerText = grandTotalPrice.toFixed(2);
         
    } else {
        alert("Please provide a valid cupon");
   }
})
  
function defaultHandler() {
    window.location.reload();
}