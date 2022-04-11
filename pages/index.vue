<template>
  <section class="section">
    <h2 class="title is-6 has-text-centered">Que bom ter você nesse momento tão especial para nós <i class="far fa-heart"></i></h2>
    <div class="columns">
      <div class="column is-5">
        <figure class="image">
          <img src="~/assets/images/banner.jpeg">
        </figure>
      </div>
      <div class="column is-7">
        <div class="columns">
          <div class="column is-6">
            <NuxtLink
              to="/convite"
              class="button is-fullwidth is-medium is-primary is-light is-rounded"
            >
              <span class="icon">
                <i class="fas fa-envelope-open-text"></i>
              </span>
              <span>Convite</span>
            </NuxtLink>
          </div>
          <div class="column is-6">
            <NuxtLink
              to="/local-do-almoco"
              class="button is-fullwidth is-medium is-primary is-light is-rounded"
            >
              <span class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span>Local do Almoço</span>
            </NuxtLink>
          </div>
        </div>

        <div class="columns">
          <div class="column is-6">
            <NuxtLink
              to="/lista-de-presentes"
              class="button is-fullwidth is-medium is-primary is-light is-rounded"
            >
              <span class="icon">
                <i class="fas fa-gift"></i>
              </span>
              <span>Lista de Presentes</span>
            </NuxtLink>
          </div>
          <div class="column is-6">
            <NuxtLink
              to="/fotos-do-casal"
              class="button is-fullwidth is-medium is-primary is-light is-rounded"
            >
              <span class="icon">
                <i class="fas fa-images"></i>
              </span>
              <span>Fotos</span>
            </NuxtLink>
          </div>
        </div>

        <!-- <div class="columns">
          <div class="column is-6">
            <button class="button is-fullwidth is-medium is-primary is-light is-rounded">
              <span class="icon">
                <i class="fas fa-comments"></i>
              </span>
              <span>Mensagem para o casal</span>
            </button>
          </div>
          <div class="column is-6">
            <button class="button is-fullwidth is-medium is-primary is-light is-rounded">
              <span class="icon">
                <i class="fas fa-user-tie"></i>
              </span>
              <span>Gravata</span>
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
  .image img{
    box-shadow: 0px 0px 10px #aaa;
    border-radius: 10px;
  }
</style>
