const urlComunidad="https://cocacola-0733.restdb.io/rest/comunidad?apikey=6538195049f7411e08b42cbd";

const appComunidad = {
    listarComunidad: ()=>{
        const contenedor=document.getElementById("contenedorComunidad");

        let contenidoHTML = "";

        fetch(urlComunidad).then(respuesta=>respuesta.json()).then(comunidad=>{
            console.log(comunidad);
            for (const comun of comunidad) {
                contenidoHTML+=`
                <div class="row">
                <div class="col">
                    <div class="card" id="card-ma">
                    <img src="${comun.imgUrl}" class="card-img-top" id="card-im">
                        <div class=""card-body" id="card-bdys"> 
                            <h5 class="card-title">Coca-Cola Favorita: ${comun.coca_cola_favorita}</h5>
                            <h8 class="card-text">De: ${comun.de}</8>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            console.log(contenidoHTML);
            contenedor.innerHTML=contenidoHTML;
        })
    },


    agregarComunidad:()=>{

        const titulo = document.getElementById('txtcoca_cola_favorita');
        const autor = document.getElementById('txtde');
        const image = document.getElementById('txtimgUrl');

        const nuevaComunidad ={
            "coca_cola_favorita": txtcoca_cola_favorita.value,
            "de": txtde.value,
            "imgUrl": txtimgUrl.value
        };


        fetch(urlComunidad, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaComunidad)
        })
        .then(response =>{
            console.log(response);
            window.location.href="comunidad.html";
        });
    }
}
appComunidad.listarComunidad();