<template>
  <h2 id="advices">🧑‍🎓Lecture Advices</h2>
  <div class="container">
    <ul v-for="(item, i) in advices" :key="i">
      <li>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdvicesSection",
  props: ["advices"],
};
</script>

<style scoped>
.container ul li {
  margin-bottom: 0em;
  text-align: justify;
  list-style: "📌 ";
}
h2 {
  padding-top: 3em;
  margin-top: 0;
}
</style>
