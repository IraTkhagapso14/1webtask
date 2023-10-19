const productSelect = document.getElementById("product");
const quantityInput = document.getElementById("quantity");
const totalSpan = document.getElementById("total");
const prices = { item1: 200, item2: 300, item3: 400 };
function calculateTotal() {
    const selectedProduct = productSelect.value;
    const quantityValue = quantityInput.value; // Get the quantity as a string
    if (selectedProduct in prices && !isNaN(quantityValue) && quantityValue > 0) {
        const price = prices[selectedProduct];
        const quantity = parseInt(quantityValue); // Parse the quantity as an integer
        const total = price * quantity;
        totalSpan.textContent = total + " ₽";
    } else {
        totalSpan.textContent = "Ошибка ввода";
    }
}
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", calculateTotal);
