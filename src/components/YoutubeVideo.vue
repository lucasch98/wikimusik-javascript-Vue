<template>
    <div>
         <b-container>
            <b-col>
              <div class="vidwrapper">
                <div class="vidcontainer">
                  <iframe  :src="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </b-col>
        </b-container>
    </div>
</template>

<script>
export default ({
   name: "YoutubeVideo",
   props: [
       "video"
   ],
})

</script>

<style scoped>
  h2{
    color:rgb(240, 240, 240);
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
  }
.vidwrapper {
      width: 100%; max-width: 800px;
      margin: 3em auto;
      border: 5px solid rgb(80, 76, 76);
    }

    .vidcontainer {
      width: 100%; max-width: 800px;
      padding-bottom: 56.25%;
      border: 5px solid rgb(14, 13, 13);
      position: relative;
    }

    .vidcontainer iframe, .vidcontainer video {
      width: 100%; max-width: 100%; height: 100%;
      position: absolute; top: 0; left: 0;
    }

</style>
