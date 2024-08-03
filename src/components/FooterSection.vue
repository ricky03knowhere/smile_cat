<template>
  <footer class="sticky-footer py-5">
    <div class="container my-auto text-center">
      <span class="">Made with ❤️
        <a href="https://ricky03knowhere.github.io/" class="fw-bold text-decoration-none"
          target="_blank">ricky03knowhere</a>
        Copyright &copy;{{ year }}
      </span><br>
      <div class="socials">
        Follow Us 📸 <a href="https://instagram.com/ricky_ackerman07" target="_blank">@ricky_ackerman07</a> 
        😺<a href="https://github.com/ricky03knowhere" target="_blank">@ricky03knowhere</a> 
        🎬<a href="https://www.youtube.com/channel/UCLQLvCI-WM-iQExTp9kdG4Q/" target="_blank">@youtube</a>
        👍<a href="https://facebook.com/edricky.infinitystones" target="_blank">@facebook</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data: function () {
    return { year: new Date().getFullYear() }
  }
}
</script>

<style scoped>
footer {
  margin-top: -1rem;
}

.container {
  padding: 5rem 0 4rem;
}
.socials {
  padding-top: 1em;
}
.socials a{
  text-decoration: none;
}
</style>
