<template lang="html">
    <div id="content">
      <section class="sub-banner" style="background:url(images/lavender-fields2.jpg) fixed center; background-size: 100% auto">
        <div class="container">
          <div class="position-center-center">
            <h2>CONTACT ME</h2>
          </div>
        </div>
      </section>
      <section>
        <div class="contact style-3 light-border padding-top-20 padding-bottom-40">
          <div class="container">
            <div class="contact-right padding-top-30 padding-left-30">
              <div id="contact_message" class="success-msg"> <i class="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>
              <form role="form" id="contact_form" class="contact-form" method="post" onSubmit="return false">
                <ul class="row">
                  <li class="col-sm-4">
                    <label>
                      <input type="text" class="form-control" name="name" id="name" placeholder="NAME">
                    </label>
                  </li>
                  <li class="col-sm-4">
                    <label>
                      <input type="text" class="form-control" name="email" id="email" placeholder="EMAIL">
                    </label>
                  </li>
                  <li class="col-sm-4">
                    <label>
                      <input type="text" class="form-control" name="company" id="company" placeholder="SUBJECT">
                    </label>
                  </li>
                  <li class="col-sm-12">
                    <label>
                      <textarea class="form-control" name="message" id="message" rows="5" placeholder="MESSAGE..."></textarea>
                    </label>
                  </li>
                  <li class="col-sm-12">
                    <button type="submit"  value="submit" id="btn_submit" onClick="proceed();">SEND MESSAGE</button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted: function(){
        this.$router.push('/contact')
    },
}
</script>

<style lang="css">
    .contact.light-border #contact_form li .form-control:focus {
        border: 1px solid #00cdcd !important;
    }
    .sub-banner {
        min-height: 400px;
    }
</style>
