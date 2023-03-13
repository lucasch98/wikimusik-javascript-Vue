<template>
<div>
  <b-container>
    <div id="BandasContenido">       
        <div class="container">  
          <b-overlay :show="cargando" rounded="sm" variant="transparent" spinner-variant="light" >
            <div v-if="cargando === false ">   
                <b-container>
                  <h2 class="lines-effect">Bandas</h2>
                  <hr>
                  <b-button v-b-toggle.sidebar-no-header variant="dark">Filtrar bandas</b-button>
                    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow bg-variant="dark" text-variant="light">
                        <template #default="{ hide }">
                          <div class="p-3">
                            <h4 id="sidebar-no-header-title">Filtro</h4>
                            <p>
                              Seleccione con que genero filtrar.
                            </p>
                            <nav class="mb-3">
                              <b-nav vertical>
                                <b-form-group class="mb-3">
                                  <b-form-select class="w-10" @change="getBanda($event)">
                                    <b-form-select-option :value="null">Todos los generos</b-form-select-option>
                                    <option
                                      v-for="genero in generos"
                                      :key="genero.id"
                                      :value="genero.id"
                                      :title="genero.nombre"
                                    >
                                      {{genero.nombre}}
                                    </option>
                                  </b-form-select>
                                </b-form-group>
                              </b-nav>
                            </nav>
                            <b-button  variant="secondary" block @click="hide" >Cerrar</b-button>
                          </div>
                        </template>
                      </b-sidebar>

                      <b-row>
                        <b-col md="3" sm="6" cols="12" class="mt-3 " v-for="banda in bandas" :key="banda.id">
                          <BandasCard :banda="banda"/> 
                        </b-col>
                      </b-row>

                </b-container>
            </div>
          </b-overlay>
        </div>
    </div>
    <br>
  </b-container>
</div>
</template>


<script>
import BandasCard from "@/components/BandasCard"
import axios from "axios"
export default {
name: 'bandas',
components: {
    BandasCard
},
data(){
    return {
        bandas: [],
        cargando : true,
        selected: [],
        generos:[]
    }
},
 mounted(){
     this.getGeneros()
     this.getBandas()
 },

methods: {
  getBanda(event){
      if(event == null){
        this.getBandas()
      }else{
         axios
        .get('https://wikimusik-servicio-web.herokuapp.com/genero/'+event+'/bandas')
        .then(res => {this.bandas = res.data})
      }
       
    },
  getGeneros(){
     axios
        .get('https://wikimusik-servicio-web.herokuapp.com/generos')
        .then(res => {this.generos = res.data})
  },
    getBandas(){
         axios
        .get('https://wikimusik-servicio-web.herokuapp.com/bandas')
        .then(res => {this.bandas = res.data; this.cargando= false})
        }
    },
}

</script>

<style scoped>
  h1{
    color:rgb(240, 240, 240);
  }
    h2{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
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