const kolvoInput = document.getElementById("kolvo");
    const servradio = document.querySelectorAll('input[name="service"]');
    const tovaroption = document.querySelector(".dopoptions");
    const dopusluga = document.querySelector(".dopoprop");
    const finalsum = document.getElementById("totalCost");

    const prices = { service1: 10, service2: 15, service3: 20 };
    const tsenanaprod = { product1: 200, product2: 300, product3: 400 };

    function itog() {
        const chosenservice = document.querySelector('input[name="service"]:checked').value;
        const kolvo = Number(kolvoInput.value);

        if (chosenservice) {
            let total = 0;

            if (chosenservice === "service2") {
                const selectedProduct = tovaroption.querySelector("select").value;
                const productPrice = tsenanaprod[selectedProduct];
                total = prices[chosenservice] * kolvo + productPrice;
            } else if (chosenservice === "service3") {
                total = dopusluga.querySelector("input").checked
                    ? 2 * prices[chosenservice] * kolvo
                    : prices[chosenservice] * kolvo;
            } else {
                total = prices[chosenservice] * kolvo;
            }

            finalsum.textContent = total;
        }

        if (chosenservice === "service2") {
            tovaroption.style.display = "block";
            dopusluga.style.display = "none";
        } else if (chosenservice === "service3") {
            tovaroption.style.display = "none";
            dopusluga.style.display = "block";
        } else {
            tovaroption.style.display = "none";
            dopusluga.style.display = "none";
        }
    }

    kolvoInput.addEventListener("input", itog);
    servradio.forEach((radio) => radio.addEventListener("change", itog));
    dopusluga.querySelector("input").addEventListener("change", itog);
    tovaroption.querySelector("select").addEventListener("change", itog);

    itog();
