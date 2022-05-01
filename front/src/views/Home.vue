<script setup>
import hero from '../assets/records.jpg'
</script>

<template>
  <main>
    <section>
      <img :src="hero" alt />
    </section>
  </main>
</template>

<style scoped>
section {
  position: relative;
  height: 100vh;
}

img {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
}

#splash {}
</style>
