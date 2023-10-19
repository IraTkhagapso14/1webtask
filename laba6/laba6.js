        const quantityInput = document.getElementById("quantity");
        const serviceRadios = document.querySelectorAll('input[name="service"]');
        const productOptions = document.querySelector(".product-options");
        const additionalProperties = document.querySelector(".additional-properties");
        const totalCostSpan = document.getElementById("totalCost");
		

        const prices = {service1: 10,service2: 15, service3: 20,};

        const productPrices = {item1: 200, item2: 300, item3: 400,};

        function calculateTotal() {
            const selectedService = document.querySelector('input[name="service"]:checked').value;
            const quantity = parseInt(quantityInput.value);

            if (selectedService) {
                let total = 0;

                if (selectedService === "service2") {
                    const selectedProduct = productOptions.querySelector("select").value;
                    const productPrice = productPrices[selectedProduct];
                    total = prices[selectedService] * quantity;
                } else if (selectedService === "service3") {
                    total = additionalProperties.querySelector("input").checked ? 2 * prices[selectedService] * quantity : prices[selectedService] * quantity;
                } else {
                    total = prices[selectedService] * quantity;
                }

                totalCostSpan.textContent = total;
            }

            if (selectedService === "service2") {
                productOptions.style.display = "block";
                additionalProperties.style.display = "none";
            } else if (selectedService === "service3") {
                productOptions.style.display = "none";
                additionalProperties.style.display = "block";
            } else {
                productOptions.style.display = "none";
                additionalProperties.style.display = "none";
            }
        }

        quantityInput.addEventListener("input", calculateTotal);
        serviceRadios.forEach(radio => radio.addEventListener("change", calculateTotal));
        additionalProperties.querySelector("input").addEventListener("change", calculateTotal);

        calculateTotal();
