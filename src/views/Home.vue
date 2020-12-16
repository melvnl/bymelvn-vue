<template>
  <div class="home">
    <section class="container container-hero">
      <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-12">
          <h1 class="text-left">
            I create website and software that make entrepreneurship easier.
          </h1>
        <p class="mt-5 text-justify">Let an experienced Software Engineer to work for your business. I'm Melvin, a Web Developer/Designer and Project Manager at Enter Digital, based in Jakarta, Indonesia. 
          I'm experienced in designing and developing attractive and impactful website that represent my client's brand or company.
           </p>
        <div class="mt-3 d-flex flex-row">
          <router-link
          class="lets-talk btn btn-primary"
          to="/contact"
          >Let's Talk</router-link
        >
          
          <router-link
          class=" see-my-work btn btn-primary"
          to="/project"
          >See My Work</router-link
        >
        </div>
        
        </div>
        <!-- <div class="col-lg-5 col-md-12 col-sm-12">
          <img src="../assets/images/hero.png" alt="Melvin Image" class />
        </div> -->
      </div>
    </section>
    <section class="container container-selected-project">
      <h1 class="my-5">Selected Projects</h1>
      <div class="row m-1" data-aos="fade-up" data-aos-duration="1000">
        <a href="http://soojibrand.com/" target="_blank">
          <img
            src="https://placehold.it/1140x650"
            alt="Portfolio - Sooji"
          />
        </a>
        <a href="http://soojibrand.com/" class="my-3 mr-3" target="_blank">
          <i class="fas fa-external-link-alt"></i>Visit Website
        </a>
      </div>
      <div class="row m-1" data-aos="fade-up">
        <a href="http://fashion.bymelvn.com/" target="_blank">
          <img
            src="https://placehold.it/1140x650"
            alt="Portfolio - MFashion"
          />
        </a>
        <a href="http://fashion.bymelvn.com/" class="my-3 mr-3" target="_blank">
          <i class="fas fa-external-link-alt"></i>Visit Website
        </a>
      </div>
      <div class="row m-1" data-aos="fade-up">
        <a href="http://bymelvn.com/project/nomads/" target="_blank">
          <img
            src="https://placehold.it/1140x650"
            alt="Portfolio - Nomads"
          />
        </a>

        <a
          href="http://bymelvn.com/project/nomads/"
          class="my-3 mr-3"
          target="_blank"
        >
          <i class="fas fa-external-link-alt"></i>Visit Website
        </a>
      </div>
      <div class="row m-5">
        <router-link
          class="see-more-project ml-auto mr-auto btn btn-primary"
          to="/project"
          >See More Projects</router-link
        >
      </div>
    </section>
    <section class="container container-testimonials">
      <h1>What Does People Say</h1>
      <div class="container carousel">
        <carousel
          class="owl-theme"
          :items="2"
          :nav="false"
          :responsive="{ 0: { items: 1 }, 560: { items: 2 } }"
        >

         <div class="row client">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="https://placehold.it/345x423"
                alt="img-3"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client text-left">
              <h4 class>Hendry Hsieh</h4>
              <h6>PT. Aneka Kuliner Raya</h6>
              <p class="para mt-4">
                Melvin is a proactive frontend engineer and project manager. Unlike most of other freelancers 
                that applied but don't understand our needs, he actually read what our project description 
                and provide DIRECT solution and pricing to the specific needs we have.
              </p>
            </div>
          </div>
          <div class="row client">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="https://placehold.it/345x423"
                alt="img1"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client text-left">
              <h4 class>Albert Christofer</h4>
              <h6>Albert Party Organizer</h6>
              <p class="para mt-4">
                Thanks a lot for Melvin and Team, honestly i‘m really satisfied
                with the services i got, aside from the pretty fast respond
                regarding my business need, the result/web is exceptional and
                the website really represent my business core value.
              </p>
            </div>
          </div>

          <div class="row client">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="https://placehold.it/345x423"
                alt="img2"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client text-left">
              <h4 class>Hendy Kristianto</h4>
              <h6>Luckku-Laundry</h6>
              <p class="para mt-4">
                Fast service, fast problem response, provide fast solutions for
                each of its customers. Very good in terms of convenience,
                connection speed and more. thank you Melvin and Team for
                motivation for entrepreneurs.
              </p>
            </div>
          </div>
          
        </carousel>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import carousel from "vue-owl-carousel";

export default {
  name: "Home",
  components: {
    Footer,
    carousel,
  },
};
</script>

<style lang="css" scoped>
.container-hero .row .col-lg-10 {
  margin-top: 150px;
}

.container-hero .row .col-lg-10 h1 {
  font-family: "Poppins", sans-serif;
  font-size: 47px;
  color: #f2994a;
}

.container-hero .row .col-lg-10 p {
  font-size: 18px;
  color: #ffffff;
  font-weight: 100;
}

.container-hero .row .col-lg-10 .d-flex .lets-talk {
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to right, #f76f1d, #fed837);
  font-size: 20px;
  padding: 12px 32px;
  border: none;
  border-radius: 30px;
}

.container-hero .row .col-lg-10 .d-flex .see-my-work {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  padding: 12px 32px;
  border: none;
  color: #f2994a;
  background-color: #000000;
  text-transform: uppercase;
}

.container-hero .row .col-lg-5 {
  margin-top: 150px;
}

.container-selected-project {
  margin-top: 200px;
}

.container-selected-project h1 {
  font-size: 46px;
}

.container-selected-project a {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.container-selected-project a i {
  margin-right: 5px;
}

.container-selected-project a img {
  width: 100%;
}

.container-selected-project a img:hover {
  opacity: 0.8;
}

.container-selected-project a:hover {
  text-decoration: none;
}

.container-selected-project a:hover i {
  color: #f2994a;
}

.container-selected-project .see-more-project {
  padding: 18px 32px;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #f2994a;
}

.container-testimonials h1 {
  margin: 150px 0 30px 0;
}

.container-testimonials .carousel {
  margin: 50px 0 50px 0;
  background-color: #363636;
}

.container-testimonials .carousel .owl-carousel .row .client-img {
  padding: 2rem;
}

.container-testimonials .carousel .owl-carousel .row .about-client {
  padding-top: 2rem;
}

.container-testimonials .carousel .owl-carousel .row .about-client h4 {
  color: #f2994a;
}

.container-testimonials .carousel .owl-carousel .row .about-client h6,
.container-testimonials .carousel .owl-carousel .row .about-client p {
  font-family: "Roboto", sans-serif;
}

.container-testimonials .carousel .owl-carousel .owl-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 1.5rem;
}

  .container-testimonials
  .carousel
  .owl-carousel
  .owl-dots
  .owl-dot.active
  span {
  width: 12px;
  height: 12px;
  background-color: #f2994a;
}
</style>
