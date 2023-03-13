<template>

      <router-link :to="{ name: 'banda', params: { id: banda.id }}" class="card h-100 mt-2 mb-2" >
      <b-card-img :src="banda.imagen" class="card-img-top" :alt="banda.nombre"></b-card-img>
      <b-card-body>
        <b-card-title>
          {{banda.nombre}}
        </b-card-title>

        <b-card-text>
          {{banda.integrantes}}
        </b-card-text>
      </b-card-body>      
      </router-link>
</template>


<script>

export default ({
   name: "BandasCard",
   props: [
       "banda"
   ],
})
</script>

<style scoped>


  h1{
    color:rgb(240, 240, 240);
  }

  .card{
    background: rgb(27, 27, 27);
    color:rgb(240, 240, 240);
    text-decoration: none;
  }
.card-title{
  text-align: left;
  font-family: 'Poppins', sans-serif;
   font-size: 25px;
}
 .card-text{
    color:rgb(172, 172, 172);
    text-align: left;
    font-family: 'Poppins', sans-serif;
   font-size: 15px;
  }
  
  .card-img-top {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    background: rgb(240, 240, 240);
  }

</style>
