
<template>
  <div>
   <h2 class="lines-effect">
      NYTimes
    </h2>
    <hr>    
    <b-overlay :show="cargando" rounded="sm" variant="transparent" spinner-variant="light"> 
          
       <div v-if="NYTimes != null"> 
           <div v-if="NYTimes['response']['docs'].length != 0"><!-- Encontro el articulo en la API NYTimes -->
              <div v-if="NYTimes['response']['docs'][0].multimedia.length != 0">
                  <b-col md="3" sm="6" cols="12" class="mt-3 " >


          <b-button  @click="gotosite(NYTimes['response']['docs'][0].web_url)"  class="card h-100 mt-2 mb-2" target=_blank>
                    <b-card-img :src="'https://static01.nyt.com/' +NYTimes['response']['docs'][0].multimedia[0].url" class="card-img-top" ></b-card-img>
                    <b-card-body>
                      <b-card-title>
                        {{NYTimes['response']['docs'][0].headline.main}}
                      </b-card-title>
                <b-card-text>
                  {{NYTimes['response']['docs'][0].abstract}}
                </b-card-text>
                    </b-card-body>      
              </b-button>
              </b-col>
              <br>
          </div>
          <br>
        <div v-if="NYTimes['response']['docs'][0].multimedia.length === 0">No se encontraron resultados en NYTimes</div>
        </div>
        <br>
    <div v-if="NYTimes['response']['docs'].length === 0">No se encontraron resultados en NYTimes</div>

      </div>
    </b-overlay>
  </div>
</template>


<script>
import axios from "axios"
export default ({
name: "NYTimesCard",
props: [
       "banda"
   ],
data() {
    return {
        NYTimes: null,
        text: "",
        cargando: false
    }
},
mounted(){
     this.getInfoNYTimes()
},
methods: {
     getInfoNYTimes(){
         this.cargando = true;
      axios
      .get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+this.banda+'&api-key=uWNhqmFGsv9cBYgDOczVvPmEen8iOSz3')
      .then(res => {this.NYTimes = res.data; this.cargando = false})
    },
    gotosite(url){
        window.open(url);
    }
}
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poppins&display=swap');


  h1{
    color:rgb(240, 240, 240);
  }
  h2{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
}

div{
  color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
  font-size: 18px;
}
  .card{
    background: rgb(27, 27, 27);
    color:rgb(240, 240, 240);
    text-decoration: none;
  }
  hr{
      color:rgb(240, 240, 240);
      height:0.20rem;
    }
.card-title{
  text-align: left;
}
  .card-text{
    color:rgb(172, 172, 172);
    text-align: left;
  }
  .card-img-top {
            width: 100%;
            height: 12rem;
            object-fit: cover;
            background: rgb(240, 240, 240);
  }


 #inputNYT{
      color:rgb(212, 209, 209);
      background-color: rgb(10, 10, 10);
      width: 60%;
    }
</style>

