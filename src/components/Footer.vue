<template>
  <section class="container-fluid container-footer border-top text-center">
    <h2 class="mt-5 mb-0">Get in Touch</h2>
    <p class="m-0">
      Feel free to reach out for collaborations, recruiting or just a friendly
      hello 😀
    </p>
    <a href="mailto:bymelvn@gmail.com" class="email m-0">bymelvn@gmail.com</a>
    <div class="row">
      <div class="sosmed mr-auto ml-auto">
        <a href="https://www.instagram.com/bymelvn/" class="p-0 mx-4">
          <i class="fab fa-instagram m-0"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+6281908816826" class="p-0 mx-4">
          <i class="fab fa-whatsapp m-0"></i>
        </a>
        <a href="https://www.linkedin.com/in/melvin-liu/" class="p-0 mx-4">
          <i class="fab fa-linkedin m-0"></i>
        </a>
        <a href="https://medium.com/@bymelvn" class="p-0 mx-4">
          <i class="fab fa-medium m-0"></i>
        </a>

        <a href="https://github.com/melvnl" class="p-0 mx-4">
          <i class="fab fa-github m-0"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="css" scoped>
.container-footer {
  margin-top: 200px;
}

.container-footer a {
  margin: 0 0 50px 0;
}

.container-footer .email {
  color: #f2994a;
}

.container-footer p,
.container-footer a {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.container-footer .row .sosmed {
  margin-top: 50px;
  margin-bottom: 50px;
}

.container-footer .row .sosmed a {
  font-size: 24px;
}
</style>