<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <b-navbar toggleable="lg" type="dark" variant="gray" id="navbar" > <!--class="navbar fixed-top" PARA QUE ME SIGA LA NAVBAR-->
      <b-container>
          <b-navbar-brand href="#" id="Wikimusik">Wikimusik</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name:'home'}" id="Home" >Home</b-nav-item>
              <b-nav-item  :to="{name:'bandas'}" id="bandas" >Bandas</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
  </div>
</template>


<style >
  html, #app{
    min-height: 100vh;
    height: 100% auto;
    background: rgb(57,57,57);
    background: linear-gradient(143deg, rgba(57,57,57,1) 0%, rgba(0,0,0,1) 96%);
    scroll-behavior: smooth;
  }

#Wikimusik{
  color:white;
}

</style>
