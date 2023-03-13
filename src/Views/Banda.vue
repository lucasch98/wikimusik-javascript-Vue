<template>
      <div class="container">
        <b-container>
         <b-overlay :show="cargando" rounded="sm" variant="transparent" spinner-variant="light"> 
           <div v-if="cargando === false">
              <Banda :banda="banda"/>
              <b-row>
                <b-col md="3" sm="6" cols="12" v-for="album in albumes" :key="album.id">  
                  <AlbumCard :album="album"/> 
                </b-col>
              </b-row>
              <br>
              <NYTimesCard :banda="banda[0].nombre"/>
            </div>
          </b-overlay>
          <br>
        </b-container>
      </div>
</template>

<script>
import axios from "axios"
import Banda from "@/components/Banda"
import AlbumCard from "@/components/AlbumCard"
import NYTimesCard from "@/components/NYTimesCard"

export default {
  name: 'BandaComponente',
   components:{
     Banda,
     AlbumCard,
     NYTimesCard
   },
   data(){
     return{
       albumes: [],
       cargando : true,
       banda: [],
     }
   },
   mounted(){
     this.getAlbumes(),
     this.getBanda()
   },
  methods:{          
    getAlbumes(){
       axios
        .get('https://wikimusik-servicio-web.herokuapp.com/banda/' +this.$route.params.id+'/albumes')
        .then(res => {this.albumes = res.data})
    },
    getBanda(){
      axios
        .get('https://wikimusik-servicio-web.herokuapp.com/banda/' +this.$route.params.id)
        .then(res => {this.banda = res.data; this.cargando= false})
    }                         
    }
}
</script>

<style scoped>
  h1{
    color:rgb(240, 240, 240);
  }
  h2{
    color:rgb(240, 240, 240);
  }
  hr{
    color:white;
    width:"500pem";
    height: "18rem";
  }
  p{
    color:white;
  }
  
</style>
        