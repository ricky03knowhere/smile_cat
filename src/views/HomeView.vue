<template>
  <NavbarSection :links="links" :switch-link="switchLink"/>
  <HeaderSection title="Lecture Tools & Advices 📝" />
  <AdvicesSection :advices="advices" />
  <ToolsSection :tools="tools" />
  <FeedbackSection />
</template>

<script>
import getData from "@/data/data.json";
import HeaderSection from "@/components/HeaderSection.vue";
import AdvicesSection from "@/components/AdvicesSection.vue";
import ToolsSection from "@/components/ToolsSection.vue";
import FeedbackSection from "@/components/FeedbackSection.vue";
import NavbarSection from "@/components/NavbarSection.vue";

export default {
  name: "HomeView",
  components: {
    HeaderSection,
    AdvicesSection,
    ToolsSection,
    FeedbackSection,
    NavbarSection,
  },
  data: function () {
    return {
      advices: getData["Lecture Advices"],
      tools: getData["Tools"],
      links: [
        ["🧑‍🎓Advices", "#advices"],
        ["👨‍💻Coding", "#coding"],
        ["🌐Hosting", "#🌐Web Hosting"],
        ["✍️Scripting", "#✍️Scripting (create paper, journal, etc)"],
        ["🔢Maths", "#🔢Maths"],
        ["📑Documents", "#📑Documents"],
        ["🎬Content Creators", "#🎬Content Creators"],
      ],
      switchLink: ['🎬 Videos','videos']
    };
  },
};
</script>
