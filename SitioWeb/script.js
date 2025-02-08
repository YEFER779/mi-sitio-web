document.addEventListener("DOMContentLoaded", function () {
    const autos = [
        {
            modelo: "Modelo A",
            versiones: [
                { imagen: "Auto2.jpg", precio: 24000 },
                { imagen: "Auto2.1.jpg", precio: 26000 },
                { imagen: "Auto2.2.jpg", precio: 28000 },
                { imagen: "Auto2.3.jpg", precio: 30000 }
            ]
        },
        {
            modelo: "Modelo B",
            versiones: [
                { imagen: "Auto1.jpg", precio: 35000 },
                { imagen: "Auto1.2.jpg", precio: 37000 },
                { imagen: "Auto1.3.jpg", precio: 39000 },
                { imagen: "Auto1.4.jpg", precio: 41000 }
            ]
        },
        {
            modelo: "Modelo C",
            versiones: [
                { imagen: "Auto3.jpg", precio: 45000 },
                { imagen: "Auto3.1.jpg", precio: 47000 },
                { imagen: "Auto3.2.jpg", precio: 49000 },
                { imagen: "Auto3.3.jpg", precio: 51000 }
            ]
        }
    ];

    const container = document.getElementById("autos-container");
    container.innerHTML = "";

    autos.forEach(auto => {
        let cardGroup = `<div class="col-md-12"><h3 class="text-center mt-4">${auto.modelo}</h3></div>`;

        auto.versiones.forEach(version => {
            cardGroup += `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${version.imagen}" class="card-img-top" alt="${auto.modelo}">
                        <div class="card-body">
                            <h5 class="card-title">${auto.modelo}</h5>
                            <p class="card-text"><strong>Precio:</strong> $${version.precio}</p>
                            <a href="#" class="btn btn-primary">Ver más</a>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML += `<div class="row">${cardGroup}</div>`;
    });
});
