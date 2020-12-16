<template>
  <div class="project">
    <section class="container container-project">
      <h1 class="text-left">Sometimes Portfolio Speaks Louder Than Words.</h1>
      <!-- <h3 class="text-left">Web</h3> -->
      <div class="row">
         <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <a href="http://soojibrand.com/" target="_blank">
            <img
              src="https://placehold.it/1140x650"
              alt="Sooji"
            />
          </a>
          <p class="mt-3">PT. Mysa Tama Deka</p>
          <div class="row">
            <a href="http://soojibrand.com/" target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <!-- <a href target="_blank">
            <img src="../assets/images/portfolio-5.png" alt="Staycation" />
          </a>-->
          <img
            src="https://placehold.it/1140x650"
            alt="Indonesia Patisserie School"
          />
          <p class="mt-3">Indonesia Patisserie School</p>
          <p style="font-size: 18px" class="text-muted">
            <i class="fas fa-wrench text-muted"></i> Under Development
          </p>
          <div class="row">
            <!-- <a href target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>-->
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <!-- <a href target="_blank">
            <img src="../assets/images/portfolio-5.png" alt="Staycation" />
          </a>-->
          <img
            src="https://placehold.it/1140x650"
            alt="Indonesia Patisserie School"
          />
          <p class="mt-3">PT. Madu Manuka International</p>
          <p style="font-size: 18px" class="text-muted">
            <i class="fas fa-wrench text-muted"></i> Under Development
          </p>
          <div class="row">
            <!-- <a href target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>-->
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <a href="http://albertorganizer.com/" target="_blank">
            <img
              src="https://placehold.it/1140x650"
              alt="Albert Organizer"
            />
          </a>
          <p class="mt-3">Albert Party Organizer</p>
          <div class="row">
            <a
              href="https://medium.com/@bymelvn/case-study-kids-party-organizer-website-in-bali-c4ba1f3c40ca"
              target="_blank"
            >
              <i class="fas fa-book"></i>Read Study Case
            </a>
            <a href="http://albertorganizer.com/" target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <a href="https://luckkulaundry.com/">
            <img src="https://placehold.it/1140x650" alt="Luck-ku Laundry" />
          </a>
          <p class="mt-3">Luck-ku Laundry</p>
          <div class="row">
            <a
              href="https://medium.com/@bymelvn/case-study-a-franchise-laundry-service-website-in-west-jakarta-23104fb93201"
              target="_blank"
            >
              <i class="fas fa-book"></i>Read Study Case
            </a>
            <a href="https://luckkulaundry.com/" target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <a href="http://bymelvn.com/project/nomads/" target="_blank">
            <img src="https://placehold.it/1140x650" alt="Nomads Travel" />
          </a>
          <p class="mt-3">Nomads Travel</p>
          <div class="row">
            <a href="http://bymelvn.com/project/nomads/" target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <!-- <a href target="_blank">
            <img src="../assets/images/portfolio-5.png" alt="M Fashion" />
          </a>-->
          <img src="https://placehold.it/1140x650" alt="M Fashion" />
          <p class="mt-3">M-Fashion</p>
          <p style="font-size: 18px" class="text-muted">
            <i class="fas fa-wrench text-muted"></i> Under Development
          </p>
          <div class="row">
            <!-- <a href target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>-->
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-5">
          <!-- <a href target="_blank">
            <img src="../assets/images/portfolio-5.png" alt="Staycation" />
          </a>-->
          <img src="https://placehold.it/1140x650" alt="Staycation" />
          <p class="mt-3">Staycation</p>
          <p style="font-size: 18px" class="text-muted">
            <i class="fas fa-wrench text-muted"></i> Under Development
          </p>
          <div class="row">
            <!-- <a href target="_blank">
              <i class="fas fa-external-link-alt"></i>Visit Website
            </a>-->
          </div>
        </div>
        
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Project",
  components: {
    Footer,
  },
};
</script>

<style lang="css" scoped>

.container-project h1 {
  margin-top: 100px;
  margin-bottom: 120px;
}

.container-project .row .col-lg-6 img {
  width: 100%;
  max-height: 300px;
}

.container-project .row .col-lg-6 img:hover {
  opacity: 0.8;
}

.container-project .row .col-lg-6 p {
  font-family: "Roboto", sans-serif;
  font-size: 24px;
}

.container-project .row .col-lg-6 .row a {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-left: 14px;
  text-decoration: none;
}

.container-project .row .col-lg-6 .row a i {
  margin-right: 3px;
}

.container-project .row .col-lg-6 .row a:hover {
  color: #f2994a;
}

.container-project .row .col-lg-6 .row a:hover i {
  color: #f2994a;
}
</style>