<template>
  <h1 class="text-center">{{ title }}</h1>
</template>

<script>
export default {
  name: "HeaderSection",
  props: ['title']
};
</script>

<style scoped>
h1 {
  margin-top: 4em;
}
</style>