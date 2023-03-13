<template>
    
     <div> 
        <div v-if="this.banda.length != 0">
          <b-container>
              <h1>{{this.banda[0].nombre}}</h1>
              <hr>

              <p>{{this.banda[0].descripcion}}</p>
              
              <h2>Integrantes</h2>
              <hr>
              <p>{{this.banda[0].integrantes}}</p>

              <h2>Genero</h2>
              <hr>
              <p>{{this.banda[0].genero}}</p>
              
              <h2>Origen</h2>
              <hr>
              <p>{{this.banda[0].origen}}</p>

              <h2>Historia</h2>
              <hr>
            <p>{{this.banda[0].historia}}</p>
            
              <h2>Albumes</h2> 
              <hr>
        </b-container>  
      </div>
</div>
</template>

<script>

export default {
  name: 'BandaComponente',
  props:[
    'banda'
  ],
   components:{
   },
   data(){
     return{
     }
   },
   mounted(){
     
   },
  methods:{                                   
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Poppins&display=swap');

  h1{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
  }
  h2{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
  }
  p{
  color:rgb(218, 214, 214);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  }

hr{
  color:rgb(240, 240, 240);
  height:0.20rem;
  }
  #textoCard{
    color:rgb(240, 239, 239);
  }
  
  .card{
    background: rgba(57, 57, 57, 0);
    background: linear-gradient(143deg, rgba(57,57,57,1) 0%, rgba(0,0,0,1) 96%);
  }

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

#foto{
  background: rgba(202, 185, 185, 0);
  height: 500px;
}
</style>