<template>
  <div>
    <nav
      class="is-flex is-justify-content-center is-align-items-center has-background-primary p-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-item">
        <NuxtLink to="/" class="title is-2">Juliane & Lennon</NuxtLink>
      </div>
    </nav>

    <section class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  },
}
</script>

<style scoped>
  .title {
    font-family: 'Great Vibes', cursive;
  }
</style>
