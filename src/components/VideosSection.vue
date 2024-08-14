<template>
  <section v-for="(title, i) in videos" :key="i">
    <h3 :id="i" class="mt-5 mb-4">{{ i }}</h3>
    <div class="container">
      <div v-if="title.length == undefined">
        <div v-for="(subtitle, i) in title" :key="i">
          <h4 :id="i" class="mb-3"> ⪢ {{ i }}</h4>
          <div class="row mt-3 mb-5">
            <div class="col-md-3 mb-5 video-wrapper" v-for="(link, i) in subtitle" :key="i">
              <div class="ratio ratio-16x9">
                <iframe :src="link" title="YouTube video" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-md-3 mb-5 video-wrapper" v-for="(link, i) in title" :key="i">
            <div class="ratio ratio-16x9">
              <iframe :src="link" title="YouTube video" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideosSection",
  props: ["videos"],
};
</script>

<style scoped>
.row .video-wrapper .ratio {
  border-radius: 1em;
  transform: scale(0.95);
  overflow: hidden;
}

/* section:first-of-type h3{
  padding-top: 2em;
} */
</style>
