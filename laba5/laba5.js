    function calculateTotal() {
        const productSelect = document.getElementById("product");
        const quantityInput = document.getElementById("quantity");
        const totalSpan = document.getElementById("total");
        const prices = { item1: 200, item2: 300, item3: 400 };
        const selectedProduct = productSelect.value;
        const quantityValue = quantityInput.value;

        if (!isNaN(quantityValue) && quantityValue > 0) {
            const price = prices[selectedProduct];
            const quantity = quantityInput.value;
            const total = price * quantity;
            totalSpan.textContent = total + " ₽";
        } else {
            totalSpan.textContent = "Ошибка ввода";
        }
    }

    window.addEventListener("DOMContentLoaded", function (event) {
        const calculateButton = document.getElementById("calculate");
        calculateButton.addEventListener("click", calculateTotal);
    });
