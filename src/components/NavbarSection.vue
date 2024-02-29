<template>
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><span class="fs-3">😸</span> <b>Smile Cat</b></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div
          :class="!isDark ? 'navbar-nav border-secondary-subtle' : 'navbar-nav'"
        >
          <a
            class="nav-link active"
            @click="onClick"
            aria-current="page"
            href="#advices"
            >🧑‍🎓Advices</a
          >
          <a class="nav-link" @click="onClick" href="#coding">👨‍💻Coding</a>
          <a class="nav-link" @click="onClick" href="#🌐Web Hosting"
            >🌐Hosting</a
          >
          <a
            class="nav-link"
            @click="onClick"
            href="#✍️Scripting (create paper, journal, etc)"
            >✍️Scripting</a
          >
          <a class="nav-link" @click="onClick" href="#🔢Maths">🔢Maths</a>
          <a class="nav-link" @click="onClick" href="#📑Documents"
            >📑Documents</a
          >
          <a class="nav-link" @click="onClick" href="#🎬Content Creators"
            >🎬Content Creators</a
          >
        </div>
        <div class="form-check form-switch ms-3">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="darkMode"
            @click="onDarkMode"
          />
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
