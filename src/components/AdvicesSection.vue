<template>
  <h2 id="advices">🧑‍🎓Lecture Advices</h2>
  <div style="margin-left: 2.7em;margin-bottom: 1em;text-align: justify;">Berikut beberapa saran yg dapat temen2 ikuti,
    biar kuliahnya
    cepet lulus <i>(*khususnya mahasiswa IF di UIN SGD Bandung)</i> :</div>
  <div class="container">
    <ul>
      <li v-for="(item, i) in advices" :key="i">
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
  list-style: "📌  ";
  margin-bottom: 1em;
  line-height: 1.8;
}

.container ul li:nth-last-child(-n+5)::after {
  content: 'Opsional';
  font-size: .8em;
  border-radius: 1em;
  margin-left: .4em;
  color: black;
  font-weight: bold;
  font-style: italic;
  padding: 2px .5em;
  background: gold;
}

h2 {
  padding-top: 3em;
  margin-top: 0;
}
</style>
