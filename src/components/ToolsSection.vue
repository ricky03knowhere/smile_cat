<template>
  <h2 id="coding">🛠️ Tools</h2>
  <section v-for="(tool, i) in tools" :key="i" >
  <h3 :id="i">{{ i }}</h3>
  <div class="container">
    <ul v-for="(item, i) in tool" :key="i">
      <li v-if="typeof item.link == 'object'">
        {{ item.title }} <br />
        <span v-for="(link, i) in item.link" :key="i">
          <a :href="link" target="_blank">{{ link }}</a
          ><br />
        </span>
      </li>
      <li v-else>
        {{ item.title }} <br />
        <a :href="item.link" target="_blank">{{ item.link }}</a>
      </li>
    </ul>
  </div>
</section>
</template>


<script>
export default {
  name: "ToolsSection",
  props: ["tools"],
};
</script>

<style scoped>
.container{
  overflow-x: hidden;
}
#👨‍💻Coding {
  padding-top: 0;
}
</style>