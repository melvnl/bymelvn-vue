<template>
  <div class="about">
    <section class="container container-about p-5">
      <p class="about-header about-highlight">
        Hi, I’m Melvin, An impact driven Software Engineer from Jakarta,
        Indonesia
      </p>
      <p class>
        My most recent work stint was with
        <span>Indonesia Patisserie School</span>, a standarized pastry school in
        PIK, North Jakarta. They need an exclusive secure edu-commerce website
        for their company, and they choose me and my team as their web
        developer.
      </p>
      <p>
        Currently active as Binus Developer Student Clubs Core Team and Project
        Manager at Enter Digital, where I handle various project that have
        valuation over $2000.
      </p>
    </section>
    <section class="container container-experiences p-5">
      <h1 class="text-left">My Work Journal</h1>
      <div class="row">
        <div class="card p-0 mr-auto col-lg-4 col-md-6 col-sm-12">
          <img
            class="card-img-top"
            src="https://placehold.it/300x190"
            alt="Binar Academy"
          />
          <div class="card-body">
            <h5 class="card-title">Enterdigital - Quality Assurance</h5>
            <p class="card-text">
              I manage Enterdigital project that involves several clients and
              software engineers, also designed the workflow.
            </p>
          </div>
        </div>
        <div class="card p-0 mr-auto col-lg-4 col-md-6 col-sm-12">
          <img
            class="card-img-top"
            src="https://placehold.it/300x190"
            alt="Binus DSC"
          />
          <div class="card-body">
            <h5 class="card-title">Binus DSC - Frontend</h5>
            <p class="card-text">
              I was selected as Frontend Facilitator in Binus Developer Student
              Club Core Team
            </p>
          </div>
        </div>
        <div class="card p-0 mr-auto col-lg-4 col-md-6 col-sm-12">
          <img
            class="card-img-top"
            src="https://placehold.it/300x190"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Slab! Design - Internship</h5>
            <p class="card-text">
              I was choosen as a remote UI/UX Designer Intern along with 7
              others intern from over 100+ applicants to join Slab! Design
              Studio.
            </p>
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
  name: "About",
  components: {
    Footer,
  },
};
</script>

<style lang="css" scoped>
.container-about p {
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
}

.container-about p span {
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
}

.container-about .about-header {
  font-weight: 500px;
}

.container-about .about-highlight,
.container-about span {
  color: #f2994a;
}

.container-about .btn {
  padding: 18px 32px;
  font-family: "Roboto", sans-serif;
  color: #f2994a;
  font-size: 20px;
  font-weight: 500;
  background: transparent;
  border: 3px solid #f2994a;
  border-radius: 0px;
  outline: none !important;
}

.container-about .btn:hover,
.container-about .btn:active {
  background-color: #f2994a !important;
  color: #ffffff;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.container-about .btn:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.container-experiences h1 {
  font-size: 32px;
}

.container-experiences .row .card {
  margin-top: 40px;
  max-width: 346px;
  background-color: #323232;
}

.container-experiences .row .card .card-img-top {
  border-radius: 0px !important;
}

.container-experiences .row .card .card-body .card-title {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
}

.container-experiences .row .card .card-body .card-text {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
}
</style>
