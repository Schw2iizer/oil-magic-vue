<template lang="html">
        <footer id="footer">
        <div class="footer-wrapper">
          <div class="footer-top">
            <div class="footer-top-wrapper">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <div class="block block-about">
                      <h3 class="block-title no-underline"><span class="text-primary">Oil Magic by Michelle</span></h3>
                      <div class="block-content">
                        <p>We use essential oils to maintain a healthy lifestyle for our family. We clean with them, cook with them, basically our life revolves around our essential oils! About 6 years ago we started on our journey with essential oils for two basic needs: immune support and digestive support.</p>
                    </div>
                    </div>
                  </div>
                  <!-- <div class="col-md-2">
                    <div class="block block-links">
                      <h3 class="block-title"><span>Info</span></h3>
                      <div class="block-content">
                        <ul>
                          <li><a href="#.">Theme Features</a></li>
                          <li><a href="#.">Page Builder</a></li>
                          <li><a href="#.">Privacy Policy</a></li>
                          <li><a href="#.">Shop Rules</a></li>
                          <li><a href="#.">Services</a></li>
                          <li><a href="#.">Gallery Layout</a></li>
                        </ul>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-md-6">
                    <div class="block block-instagram-widget">
                      <h3 class="block-title"><span>My Instagram Feed</span></h3>
                      <ul>
                        <li v-for="i in instagramImages" track-by="$index">
                            <a :href="i.link" target="_blank">
                                <img :src="i.images.thumbnail.url" :alt="i.caption.text" />
                                <span class="overlay"></span>
                            </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-bottom-wrapper">
              <div class="container">
                <div class="row">
                  <div class="col-md-6 copyright">
                    <p>&copy; 2018 Oil Magic by Michelle</p>
                  </div>
                  <div class="col-md-6 social-links">
                    <ul class="right">
                      <li><a href="https://www.facebook.com/oilmagicbymichelle" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="https://www.instagram.com/oilmagicbymichelle" target="_blank"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
</template>
<script type="text/javascript" src="http://www.doterracertifiedsite.com/api/Certificates/Script?domain=oilmagicbymichelle.com&amp;sealSize=Small"></script>
<script>
export default {
    data() {
        return {
            instagramImages: [],
        }
    },
    mounted: function (){
        this.getInstagram()
    },
    methods: {
        getInstagram: function () {
            var $this = this
            this.$jsonp('https://api.instagram.com/v1/users/1558666427/media/recent/?access_token=1558666427.1677ed0.ccfbaa5a60304eea99b6f69d31b913b5&count=10&callback=?%27')
            .then(function (response) {
                $this.instagramImages = response.data
            })
        }
    }
}
</script>

<style lang="css">
    .footer-logo {
        width: 325px;
        height: auto;
    }
    .footer-wrapper p {
        color: white;
    }
    .overlay {
        opacity: .5 !important;
    }
    .overlay p {
        color: black;
        text-align: center;
        font-size: 12px;
    }
    .block-instagram-widget li {
        width: 19.33% !important;
    }
</style>
