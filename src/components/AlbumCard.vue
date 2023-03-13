<template>
    <div v-if="banda.length != 0">

<!--<b-button v-b-toggle="'collapse-2'" variant="dark" class="card h-100 mt-2 mb-2">
<b-card-img :src="album.imagen" class="card-img-top" ></b-card-img>
  
  <b-card-body>
    <b-card-title>
      {{this.album.nombre}}<br>
    </b-card-title>
          <b-card-text>
            <small>{{album.fecha}}</small><br>
            {{album.duracion}}<br>  
              <p v-if="canciones.length === 1">{{canciones.length + " cancion"}}</p>
              <p v-else>{{canciones.length + " canciones"}}</p>
          </b-card-text>
         <b-collapse id="collapse-2">  
              <br>
              <b-table id="tablaCanciones" striped hover :items="items" :fields="fields">
                  <template #cell(Spotify)="url" id="asd">
                    <i @click="info(url.item.Spotify)" class="fab fa-spotify" style="color:#81b71a" id="botonSpotify"></i>
                    </template>
              </b-table>
            </b-collapse>
  </b-card-body>
  
    </b-button>-->



<!--<b-button v-b-toggle="'collapse-2'" variant="dark" class="card h-100 mt-2 mb-2">-->
 <b-button v-b-modal.modal-lg variant="outline-secondary">
<b-card-img :src="album.imagen" class="card-img-top" ></b-card-img>
  
  <b-card-body>
    <b-card-title>
      <h3>{{this.album.nombre}}</h3>
    </b-card-title>
          <b-card-text>
            <small>{{album.fecha}}</small><br>
            {{album.duracion}}<br>  
              <p v-if="canciones.length === 1">{{canciones.length + " cancion"}}</p>
              <p v-else>{{canciones.length + " canciones"}}</p>
          </b-card-text>
         <!--<b-collapse id="collapse-2">  
              <br>
              <b-table id="tablaCanciones" striped hover :items="items" :fields="fields">
                  <template #cell(Spotify)="url" id="asd">
                    <i @click="info(url.item.Spotify)" class="fab fa-spotify" style="color:#81b71a" id="botonSpotify"></i>
                    </template>
              </b-table>
            </b-collapse>-->
            
            <b-modal id="modal-lg" size="lg" ok-only ok-variant="dark" hide-header-close > <!--footer-bg-variant="dark"  body-bg-variant="dark" header-bg-variant="dark">-->
            <b-table id="tablaCanciones" striped hover :items="items" :fields="fields">
                  <template #cell(Spotify)="url" id="asd">
                    <i @click="info(url.item.Spotify)" class="fab fa-spotify" style="color:#81b71a" id="botonSpotify"></i>
                    </template>
              </b-table>
            </b-modal>

  </b-card-body>
  
    </b-button>






    </div>
</template>


<script>
import axios from "axios"

export default {
   name: "AlbumCard",
   props: [
       "album"
   ],
    components:{
    },
    data(){
    return{
        banda: [],
        canciones: [],
        cancionesDeAlbum: [],
        items: [],
        fields: ['Titulo','Duracion','Spotify'],
        probando: [],
    }
   },
    mounted(){
     this.getBanda()
     this.getCanciones()
   },
   methods:{  
     getCanciones(){
           axios
            .get('https://wikimusik-servicio-web.herokuapp.com/album/'+this.album.id+'/canciones')
            .then(res => {this.canciones = res.data; this.probando = res.data;
              this.canciones.forEach(cancion => (this.items[this.items.length] = {Titulo: cancion.nombre, Duracion: cancion.duracion,  Spotify: cancion.url }))//_rowVariant: 'dark'
            })
       },
       getBanda(){
           axios
            .get('https://wikimusik-servicio-web.herokuapp.com/banda/' + this.$route.params.id)
            .then(res => {this.banda = res.data})

       },
       
       info(item) {
          window.open(item);//Para abrir en una nueva ventana
      }
   }
}

</script>

<style scoped>
  h1{
    color:rgb(240, 240, 240);
  }

  h3{
    color:rgb(240, 240, 240);
  }

.card{
    background: rgb(27, 27, 27);
    color:rgb(240, 240, 240);
    text-decoration: none;
  }

 .card-text{
    color:rgb(172, 172, 172);
    text-align: left;
    font-family: 'Poppins', sans-serif;
   font-size: 18px;
  }

 .card-img-top {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            background: rgb(240, 240, 240);
  }
 
  hr{
      color:rgb(240, 240, 240);
      height:0.20rem;
    }
.card-title{
  text-align: left;
  font-family: 'Poppins', sans-serif;
   font-size: 25px;
}
 
.fields{
color:rgb(240, 240, 240);
}

#botonSpotify{
  justify-self: center;
}

#asd{
  justify-content: center;
}

</style>
