<template>
  <section class="is-flex is-justify-content-center is-flex-direction-column is-align-items-center">
    <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        <li>
           <NuxtLink to="/">Início</NuxtLink>
        </li>
        <li class="is-active"><a href="#" aria-current="page">Convite</a></li>
      </ul>
    </nav>

    <img src="~/assets/images/convite.jpeg" alt="Convite Juliane e Lennon">
  </section>
</template>

<script>
export default {
  name: 'PageConvite'
}
</script>

<style>

</style>
