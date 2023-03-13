<template>
    <div>
        <p>Descubra los artistas más populares en Last.fm por país.</p>
        <b-form-input v-model="pais" placeholder="Nombre de pais" id="inputPaisLastFM" autocomplete="off" v-b-tooltip.hover title="Ej: spain, italy, mexico, etc"></b-form-input>
        <br>
         <b-button  variant="dark" @click="getInfoLastFM()" id="botonLastFM">Buscar en LastFM</b-button>
        <b-overlay :show="cargando" rounded="sm" variant="transparent" spinner-variant="light"> 
            <br>
            <div v-if="artistas != null">
                <div v-if="artistas['error'] != 6">  
                    <b-card>
                        <b-card-text>
                            <h2>{{'Los 5 mejores artistas de: ' + this.mensaje}}</h2>
                            <br>
                            <div v-for="i in 5" :key="i.key">
                                <div >{{"Artista: " + artistas['topartists']['artist'][i].name + " - Numero de oyentes: " + artistas['topartists']['artist'][i].listeners + " - Ver en LastFM: "}}
                                    <i class="fab fa-lastfm" @click="gotosite(artistas['topartists']['artist'][i].url)" style="color:#e72207" id=i></i></div>
                                    <hr>
                            </div>
                        </b-card-text>
                    </b-card>          
                </div>
                <div v-if="artistas['error'] === 6">No se encontraron resultados en LastFM</div>  
            </div>
        </b-overlay>
    </div>
</template>

<script>
import axios from 'axios'

export default({
    name: "LastFM",
    data(){
        return{
            artistas: null,
            pais: "",
            cargando: false,   
            mensaje: ''  
        }
    },
mounted(){
    
},
methods: {
    getInfoLastFM(){ //Obtiene los artistas más populares en Last.fm por país. 
    this.cargando = true;
    this.artistas = null;
    this.mensaje = this.pais
        axios
        .get('https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+this.pais+'&api_key=edada9130ca9661821ed8b3e62e2020e&format=json')
        .then(res => {this.artistas = res.data; this.cargando = false})
    },
    gotosite(url){
        window.open(url);
    }
    
}
})
</script>

<style scoped>
 #inputPaisLastFM{
      color:rgb(212, 209, 209);
      background-color: rgb(10, 10, 10);
      width: 60%;
    }
    

    #tablaArtistasLastFM{
  color:rgb(172, 172, 172);
  background: rgb(27, 27, 27);
 }

 p{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
  
 }
.card{
    background: rgb(27, 27, 27);
    color:rgb(240, 240, 240);
  }

.card-text{
    color:rgb(172, 172, 172);
  }

h2{
    color:rgb(240, 240, 240);
  }

</style>