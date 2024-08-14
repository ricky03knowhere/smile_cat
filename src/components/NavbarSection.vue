<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container">
      <router-link class="navbar-brand" to="/"><span class="fs-3">😸</span> <b>Smile Cat</b></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div :class="!isDark ? 'navbar-nav border-secondary-subtle' : 'navbar-nav'">
          <router-link class="nav-link" :to="switchLink[1]">{{ switchLink[0] }}</router-link>
          <a v-for="(link, i) in links" :key="i" class="nav-link" @click="onClick" :href="link[1]">{{ link[0] }}</a>
        </div>
        <div class="form-check form-switch ms-3">
          <input class="form-check-input" type="checkbox" role="switch" id="darkMode" @click="onDarkMode" />
          <label class="form-check-label" for="darkMode">{{
            isDark ? "🌜" : "🌞"
          }}</label>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarSection",
  data: function () {
    return { isDark: Boolean };
  },
  props: ["links", 'switchLink'],
  methods: {
    onClick: function (e) {
      const navLink = document.querySelectorAll(".nav-link");
      navLink.forEach((el) => el.classList.remove("active", "text-warning"));
      e.target.classList.add("active", "text-warning");
    },
    onDarkMode: function () {
      // Dark Toggle
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-bs-theme", "light");
      }
    },
  },
  mounted: function () {
    // move darkmode toggle according mode
    let darkToggle = document.querySelector("#darkMode");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      darkToggle.checked = true;
      this.isDark = true;
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      darkToggle.checked = false;
      this.isDark = true;
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  },
};
</script>

<style>
.navbar {
  background-color: rgba(255, 255, 255, 0.15);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  box-shadow: inset 0 -3px 5px 0 #00000026;
}

.navbar-nav {
  border-right: 2px solid white;
  padding-right: 1em;
}
</style>
