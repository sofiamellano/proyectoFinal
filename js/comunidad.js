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
                            <h8 class="card-text">De: ${comun.de}</8><br>
                            <a href="#" onclick="appComunidad.eliminarComunidad('${comun._id}','${comun.de}')">Eliminar</a>
                            <a href="#" onclick="appComunidad.editarComunidad('${comun._id}')">Editar</a>
                            <br>
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
        const id = document.getElementById('txtId');
        const titulo = document.getElementById('txtcoca_cola_favorita');
        const autor = document.getElementById('txtde');
        const image = document.getElementById('txtimgUrl');
        const buton = document.getElementById('buttonClose');

        let urlApi='';
        let metodoHttp='';
        
        if(titulo.value==='')
        {
            urlApi="https://cocacola-0733.restdb.io/rest/comunidad?apikey=6538195049f7411e08b42cbd";
            metodoHttp='POST';
            
        }
        else
        {
            urlApi=`https://cocacola-0733.restdb.io/rest/comunidad/${id.value}?apikey=6538195049f7411e08b42cbd`;
            metodoHttp='PUT';
        }

        const nuevaComunidad ={
            "coca_cola_favorita": txtcoca_cola_favorita.value,
            "de": txtde.value,
            "imgUrl": txtimgUrl.value
        };


        fetch(urlApi, {
            method: metodoHttp,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaComunidad)
        })
        .then(response =>{
            console.log(response);
            window.location.href="comunidad.html";
        });
    },

    eliminarComunidad:(idAEliminar,nombreABorrar)=>{
        Swal.fire({
            title: `Seguro que quiere borrar la publicación de ${nombreABorrar}?`,
            text: "No vas a poder cambiar esta operacion",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, quiero borrarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    const urlApi=`https://cocacola-0733.restdb.io/rest/comunidad/${idAEliminar}?apikey=6538195049f7411e08b42cbd`
                fetch(urlApi, {
                method: 'DELETE'
                })
                .then(response => {
                    console.log(response);
                    return appComunidad.listarComunidad();
                }).then(response =>{
                    Swal.fire(
                    'Eliminado!',
                    `La publicacion ${nombreABorrar} fue borrado .`,
                    'satisfactoriamente'
                    )
                });
                }
            Swal.fire(
                'Borrado',
                'Se borro el libro.',
                'success'
            )
            }
        })
    },


    editarComunidad:(idComunidadAEditar)=>{
        const urlApi=`https://cocacola-0733.restdb.io/rest/comunidad/${idComunidadAEditar}?apikey=6538195049f7411e08b42cbd`;
        fetch(urlApi).then(res => res.json()).then(comun =>{
            document.getElementById("txtId").value=comun._id;
            document.getElementById("txtcoca_cola_favorita").value=comun.coca_cola_favorita;
            document.getElementById("txtde").value=comun.de;
            document.getElementById("txtimgUrl").value=comun.imgUrl;
            document.getElementById("botonCambiar").value='Editar'; // Cambia el boton a editar.

            const ventanaEditar=document.getElementById('agregarEditarModal');
            let ventana=new bootstrap.Modal(ventanaEditar);
            ventana.show();
        });
    },
    
    cerrarBoton:()=>{
        document.getElementById("txtId").value='';
        document.getElementById("txtcoca_cola_favorita").value='';
        document.getElementById("txtde").value='';
        document.getElementById("txtimgUrl").value='';
        document.getElementById("botonCambiar").value='Añadir';
    }
}
appComunidad.listarComunidad();