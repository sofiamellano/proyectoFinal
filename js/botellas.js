const urlBotellas="https://cocacola-0733.restdb.io/rest/botellas?apikey=6538195049f7411e08b42cbd";

const appBotellas = {
    listarBotellas: ()=>{
        const contenedor=document.getElementById("contenedorBotella");

        let contenidoHTML = "";

        fetch(urlBotellas).then(respuesta=>respuesta.json()).then(botellas=>{
            console.log(botellas);
            for (const botella of botellas) {
                contenidoHTML+=`
                <div class="row">
                    <div class="col">
                        <div class="card" id="card-main">
                        <img src="${botella.imgUrl}" class="card-img-top" id="card-image">
                            <div class=""card-body" id="card-bdy"> 
                                <h5 class="card-title">${botella.tipo}</h5>
                                <h8 class="card-text">Lts-ml:${botella.Lts_ml}</8>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            console.log(contenidoHTML);
            contenedor.innerHTML=contenidoHTML;
        })
    }
}
appBotellas.listarBotellas();