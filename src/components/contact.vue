<template lang="html">
    <div class="contact-me-wrapper">
        <div id="content">
          <section class="sub-banner animated fadeIn" style="background:url(images/lavender-fields2.jpg) fixed no-repeat center; background-size: 100% auto">
            <div class="container">
              <div class="position-center-center">
                <h2>CONTACT ME</h2>
              </div>
            </div>
          </section>
          <section>
              <div class="container">
                <div class="row padding-top-40 padding-bottom-10">
                  <!-- Phone Number  -->
                  <div class="col-md-6">
                    <div class="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-xlarge dark-text">
                    <a href="tel:8013603608" class="contact-info phone">
                      <div class="ib-icon">
                          <i class="fa fa-mobile text-primary"></i>
                      </div>
                      </a>
                      <div class="ib-info">
                        <a href="tel:8013603608" class="contact-info phone">(801) 360-3608</a>
                      </div>
                    </div>
                  </div>

                  <!-- Email  -->
                  <div class="col-md-6">
                    <div class="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                        <a href="mailto:michellecannon88@gmail.com">
                            <div class="ib-icon">
                                <i class="fa fa-envelope-o text-primary"></i>
                            </div>
                        </a>
                        <div class="ib-info text-dark">
                            <p class="no-margin-bottom contact-info">
                                <a href="mailto:michellecannon88@gmail.com">michellecannon88@gmail.com</a>
                            </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="contact style-3 light-border padding-top-20 padding-bottom-40">
              <div class="container">
                <div class="contact-right padding-top-30 padding-left-30">
                  <div id="contact_message" class="success-msg"> <i class="fa fa-paper-plane-o"></i>Thank You. Your Message has been Submitted</div>
                  <form role="form" id="contact_form" class="contact-form" method="post" onSubmit="return false" action="submit.php">
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
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted: function(){

    },
}
</script>

<style lang="css">
    .contact-me-wrapper .contact.light-border #contact_form li .form-control:focus {
        border: 1px solid #00cdcd !important;

    }
    .contact-me-wrapper .sub-banner {
        min-height: 400px;
    }

    .contact-me-wrapper .ib-info .contact-info {
        font-size: 20px;
        font-weight: 300;
        margin-right: 60px;
    }

    .contact-me-wrapper .ib-info .contact-info.phone {
        font-size: 20px;
        font-weight: 300;
        margin-right: 150px;
    }
    .contact-me-wrapper {
        font-size: 20px;
    }
</style>
