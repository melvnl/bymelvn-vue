<template>
  <div id="app">
    <section class="container container-navbar p-0">
      <nav class="navbar navbar-expand-lg">
        <router-link class="nav-link" to="/"
          ><img src="./assets/images/logo.png" alt="Brand Logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onclick="toggleMenu()"
        >
          <i class="fas fa-bars toggler-icon"></i>
        </button>
        <div class="collapsed navbar-collapse mt-3" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <!-- <a class="nav-link" href="index.html">Home</a> -->
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="about.html">About</a> -->
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="project.html">Project</a> -->
              <router-link class="nav-link" to="/project">Project</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(3em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.container-navbar
  .navbar
  .collapsed
  .navbar-nav
  .nav-item
  .router-link-exact-active {
  color: #f2994a;
}

#app {
  background-color: #000000;
}

#app .container-navbar .navbar {
  font-size: 16px;
  font-weight: 500;
}

#app .container-navbar .navbar .collapsed .navbar-nav .nav-item {
  margin-left: 30px;
}

#app .container-navbar .navbar .collapsed .navbar-nav .active a {
  color: #f2994a;
}
</style>

