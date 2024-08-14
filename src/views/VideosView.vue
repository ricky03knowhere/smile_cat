<template>
  <NavbarSection :links="links" :switch-link="switchLink" />
  <HeaderSection title="Videos 🎬" />
  <VideosSection :videos="videos" />
</template>

<script>
import getVideos from "@/data/videos.json";
import VideosSection from "@/components/VideosSection.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import NavbarSection from "@/components/NavbarSection.vue";

export default {
  name: "VideosView",
  components: {
    VideosSection,
    HeaderSection,
    NavbarSection
  },
  data: function () {
    return {
      videos: getVideos, links: [
        ["🎓Biar jadi Mahasiswa Cerdas", "#🎓✨Biar jadi Mahasiswa Cerdas",],
        ["🤗Relationship", "#🤗🧑🏻‍🤝‍👩🏻Relationship"],
        ["❤️‍🔥Buat Maba", "#❤️‍🔥🫶Buat adek2 Maba"],
        ["👨‍💻Tips2 Programmer", "#👨‍💻💻Tips2 Buat  Programmer"],
      ], switchLink: ['📝Lecture Advices & Tools', '/']
    };
  },
};
</script>
