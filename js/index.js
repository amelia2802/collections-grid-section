// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const productpage = document.getElementById("product")

let productCard = ""

fetch("./data/collections.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach(item => {
        productCard+=`
            <div class="card">
                <div class="details">
                    <h1>${item.name}</h1>
                    <p>${item.description}</p>
                </div>
            </div>
        `
    })
    productpage.innerHTML = productCard
});

