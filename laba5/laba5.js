function itogl() {
        const productSelect = document.getElementById("product");
        const kolvoInput = document.getElementById("kolvo");
        const totalSpan = document.getElementById("total");
        const prices = { product1: 200, product2: 300, product3: 400 };
        const selectedProduct = productSelect.value;
        const kolvoValue = kolvoInput.value;
        if (!isNaN(kolvoValue) && kolvoValue > 0) { 
            const price = prices[selectedProduct];
            const kolvo = kolvoInput.value;
            const total = price * kolvo;
            totalSpan.textContent = total + " ₽";
        } 
		else {
            totalSpan.textContent = "Ошибка ввода";
        }
    }
    window.addEventListener("DOMContentLoaded", function (event) {
        const calculateButton = document.getElementById("calculate");
        calculateButton.addEventListener("click", itogl);
    });
