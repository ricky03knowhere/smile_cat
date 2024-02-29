<template>
  <div class="container mt-5">
    <NavbarSection />
    <HeaderSection />
    <AdvicesSection :advices="advices" />
    <ToolsSection :tools="tools" />
    <FeedbackSection />
    <FooterSection />
  </div>
</template>

<script>
import getData from "./data/data.json";
import HeaderSection from "./components/HeaderSection.vue";
import AdvicesSection from "./components/AdvicesSection.vue";
import ToolsSection from "./components/ToolsSection.vue";
import NavbarSection from "./components/NavbarSection.vue";
import FeedbackSection from "./components/FeedbackSection.vue";
import FooterSection from "./components/FooterSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    AdvicesSection,
    ToolsSection,
    NavbarSection,
    FeedbackSection,
    FooterSection
  },
  data: function () {
    return { advices: getData["Lecture Advices"], tools: getData["Tools"] };
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
