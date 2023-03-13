<template>
<b-overlay :show="cargando" rounded="sm" variant="transparent" spinner-variant="light">
<div>
   
  <b-container id="Carousel">
    <div id="BandasContenido">  
              <div class="container">      
                  <b-container>
                    <h2 class="lines-effect">Algunas bandas</h2>
                    <hr>
                  <b-col cols="12" class="justify-content-end d-flex mt-3"> <b-button variant="dark" :to="{name:'bandas'}">ver todas</b-button></b-col>
                    <b-row>
                      <b-col md="3" sm="6" cols="12" class="mt-3 " v-for="banda in bandas" :key="banda.id">
                        <BandasCard :banda="banda"/> 
                      </b-col>
                    </b-row>
                  </b-container>
              </div>
              <br>
              <br>
          <div>
            <b-container>
              <h2 class="lines-effect">LastFM</h2>
              <hr>
              <LastFM />
            </b-container>
          </div>
          <br>
          <br>
          <h2 class="lines-effect">Videos</h2>
          <hr>
          
      <div v-for="video in videos" :key="video.id">
        <YoutubeVideo :video="video"/>
      </div>
    </div>
  </b-container>
</div>
</b-overlay>
</template>

<script>
import BandasCard from "@/components/BandasCard"
import LastFM from "@/components/LastFM"
import YoutubeVideo from "@/components/YoutubeVideo"
import axios from "axios"


  export default {
    name: 'home',
    components: {
      BandasCard,
      LastFM,
      YoutubeVideo,
    },
    data() {
      return {
        bandas: [],
        cargando : true,
        videos: [
          'https://www.youtube.com/embed/gEPmA3USJdI',
          'https://www.youtube.com/embed/5FGjpmpAenM',
          'https://www.youtube.com/embed/kV-2Q8QtCY4'
        ],
      }
    },
    mounted(){
      this.getBandas()
    },
    methods: {
      getBandas(){
        axios
        .get('https://wikimusik-servicio-web.herokuapp.com/bandas?count='+ 4)
        .then(res => {this.bandas = res.data;this.cargando= false;})
        },
    }   
  }
</script>

<style scoped>
  #BandasContenido{
    color:rgb(240, 240, 240);
  }
  
  .carousel-item img {
        height:100vh!important ;
    }

    #hr{
      color:rgb(240, 240, 240);
      height:0.20rem;
    }
    html{
      scroll-behavior: smooth;
    }

    h2{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
  }
    
    
    #inputNYT{
      color:rgb(212, 209, 209);
      background-color: rgb(66, 71, 71);
    }

   

</style>
