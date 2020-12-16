<template>
  <div class="contact">
    <section class="container-contact container">
      <h1 class="contact mb-3">Let's chat about your project</h1>
      <p
        class="contact-intro mb-5"
      >Hi there, Let me know how i can help your business/brand to grow by filling this form 🙂</p>
      <div class="kwes-form">
        <form
          method="POST"
          action="https://kwes.io/api/foreign/forms/zj6csKYzW1lb9yFXfbky"
          success-message="Thank You for Submitting! I'm gonna reach out to you ASAP"
        >
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="form-control shadow-none"
              rules="string"
            />
          </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="form-group">
            <input
              type="phone"
              name="phone"
              placeholder="Phone Number/Whatsapp"
              class="form-control shadow-none w-100"
              rules="numeric|required"
            />
          </div>
          </div>
        </div>
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="form-group">
            <input
              type="text"
              name="company"
              placeholder="Your Company or Business Name"
              class="form-control shadow-none"
              rules="required"
            />
          </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
               <div class="form-group">
            <input
              type="text"
              name="position"
              placeholder="Your Position in That Company"
              class="form-control shadow-none"
              rules="required"
            />
          </div>
            </div>
          </div>
            <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="form-control shadow-none"
              rules="email|required"
            />
          </div>
          <div class="form-group">
            <textarea
              name="message"
              class="form-control shadow-none"
              rows="5"
              placeholder="Your Message..."
              rules="required"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Send
            <i class="fas fa-angle-right mx-1"></i>
          </button>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "Contact",
  components: {
    Footer,
  },
  mounted() {
    let kwesScript = document.createElement("script");

    kwesScript.setAttribute("src", "https://kwes.io/js/kwes.js");

    document.head.appendChild(kwesScript);
  },
};
</script>

<style lang="css" scoped>

.container-contact {
  margin-top: 100px;
}

.container-contact .contact-intro {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}

.container-contact .kwes-form .form-group {
  margin-bottom: 35px;
}

.container-contact .kwes-form .row .col-lg-6 .form-group input {
  min-height: 65px;
  border: none;
  border-radius: 0px;
}

.container-contact .kwes-form .form-group input {
  min-height: 65px;
  border: none;
  border-radius: 0px;
}

.container-contact .kwes-form .form-group input:focus {
  color: #000000;
  background-color: #f5f5f5;
}

.container-contact .kwes-form .form-group textarea {
  min-height: 65px;
  border: none;
  border-radius: 0px;
}

.container-contact .kwes-form .form-group textarea:focus {
  background-color: #f5f5f5;
  color: #000000;
}

.container-contact .kwes-form .row .col-lg-6 .form-group input:focus {
  color: #000000;
  background-color: #f5f5f5;
}

.container-contact .kwes-form .form-group .form-control {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 16px;
}

.container-contact .kwes-form .kw-message-info {
  font-size: 18px;
  background-color: #f2994a;
}

.container-contact .kwes-form .btn {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  padding: 10px 32px;
  background-color: #f2994a;
  border: none;
}

.container-contact .kwes-form .btn:hover {
  background-color: #d47d2f;
  border: none;
}

.container-contact .kwes-form .btn:active {
  outline-color: #f2994a;
}

.container-contact .kwes-form .btn:focus {
  outline: none !important;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>
