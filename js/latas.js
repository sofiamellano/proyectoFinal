const urlLatas= "https://cocacola-0733.restdb.io/rest/latas?apikey=6538195049f7411e08b42cbd";

const appLatas = {
    listarLatas: ()=>{
        const contenedor=document.getElementById("contenedorLatas");

        let contenidoHTML = "";

        fetch(urlLatas).then(respuesta=>respuesta.json()).then(latas=>{
            console.log(latas);
            for (const lata of latas) {
                contenidoHTML+=`
                <div class="row">
                    <div class="col">
                        <div class="card" id="card-min">
                        <img src="${lata.imgUrl}" class="card-img-top" id="card-img">
                            <div class=""card-body" id="card-body"> 
                                <h5 class="card-title">${lata.tipo}</h5>
                                <h8 class="card-text">ml:${lata.ml}</h8>
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
appLatas.listarLatas();