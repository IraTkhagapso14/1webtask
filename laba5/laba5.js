const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const totalSpan = document.getElementById("total");
const prices = { item1: 5,item2: 7,item3: 10};
function calculateTotal() {
    const selectedProduct = productSelect.value;
    const quantity = parseInt(quantityInput.value);
    if (selectedProduct in prices && !isNaN(quantity) && quantity > 0) {
        const price = prices[selectedProduct];
        const total = price * quantity;
        totalSpan.textContent = `$${total}`;
    } else {
        totalSpan.textContent = "Ошибка ввода";
    }
}
