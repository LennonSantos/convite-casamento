<template>
  <section class="section">

    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        <li>
           <NuxtLink to="/">Início</NuxtLink>
        </li>
        <li class="is-active"><a href="#" aria-current="page">Local da Festa</a></li>
      </ul>
    </nav>

    <p>
      <b>Rancho Pavão Eventos</b> <br> Estrada municipal Nelson Tavares Silva, 3800
    </p>

    <br>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.00606781496!2d-45.7594288850289!3d-23.20644948486018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdb342e7bf15db%3A0x1a7725f84eddcef0!2sRancho%20Pav%C3%A3o%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1649210303482!5m2!1spt-BR!2sbr" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <img src="~/assets/images/local.jpeg">

  </section>
</template>

<script>
export default {
  name: 'PageLocalDoAlmoco'
}
</script>

<style scoped>
  iframe, img {
    width: 100%;
  }
</style>
