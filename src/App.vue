<template>
  <div class="container mt-5">
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    FooterSection,
  },
};
</script>

<style>
h2 {
  margin: 4em 0 1em;
}

h3 {
  padding: 4em 0 1em;
}

.container ul li {
  margin-bottom: 1.8em;
  /* text-align: justify; */
}
</style>
