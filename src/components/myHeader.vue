<template lang="html">
    <div class="header-wrapper">
        <div class="top-bar">
        <div class="container">
          <div class="col-md-6">
            <ul class="row">
                <li>

                    <!--<p><img class="seal margin-right-10" name="seal" src="/images/seal.png" oncontextmenu="return false;" border="0" alt="" scale="0" @click="verifySeal()"></p>-->
                </li>
              <li class="margin-right-20">
                <p><i class="fa fa-phone margin-right-10"></i><a href="tel:8013603608">(801) 360-3608</a></p>
              </li>
              <li>
                <p><i class="fa fa-envelope-o margin-right-10"></i><a href="mailto:michellecannon88@gmail.com">michellecannon88@gmail.com</a></p>
              </li>
            </ul>
          </div>

          <!-- Social Icon -->
          <div class="col-md-6 text-right social-top">
              <a href="https://www.facebook.com/oilmagicbymichelle" target="_blank">
                  <i class=" fa fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/oilmagicbymichelle" target="_blank">
                  <i class=" fa fa-instagram"></i>
              </a>
          </div>
        </div>
      </div>

      <!-- Header -->
      <header class="header coporate-header">
        <div class="sticky">
          <div class="container">
            <div class="logo">
                <a href="/">
                    <img class="oil-magic-logo" src="images/logo.png" alt="">
                </a>
            </div>

            <!-- Nav -->
            <nav>
              <ul id="ownmenu" class="ownmenu">
                <li class="active"><a href="">Home</a></li>
                <li><a href="">About Me</a>
                  <ul class="dropdown">
                    <li>
                        <router-link :to="{ path: '/about' }">Our Story</router-link>
                    </li>
                    <li>
                        <router-link :to="({path: 'favorite-products'})">Our Favorite Products</router-link>
                    </li>
                    <li>
                        <router-link :to="({path: 'healthy-lifestyle'})">Why We Choose a Natural Lifestyle</router-link>
                    </li>
                  </ul>
                </li>
                <li><a href="">Why Doterra?</a>
                  <ul class="dropdown">
                    <li><router-link :to="{ path: 'why-doterra' }">Why Doterra Oils?</router-link></li>
                    <li><router-link :to="{ path: 'member-benefits' }">Membership Benefits</router-link></li>
                    <li><router-link :to="{ path: 'co-impact-sourcing' }">Co-impact Sourcing</router-link></li>
                  </ul>
                </li>
                <li><a href="">About Oils</a>
                  <ul class="dropdown">
                    <li><router-link :to="({ path: 'how-to-use'})">How to Use Doterra Essential Oils</router-link></li>
                    <li><router-link :to="({ path: 'resources'})">Doterra Resourcecs</router-link></li>
                  </ul>
                </li>
                <li><a href="">Get Started</a>
                  <ul class="dropdown">
                    <li><router-link :to="{path: 'starter-kits'}"> Starter Kit Options</router-link></li>
                    <li><router-link :to="{path: 'how-to-order'}" replace> How to Order</router-link></li>
                    <li><router-link :to="{path: 'loyalty-rewards'}">Loyalty Rewards Program</router-link></li>
                  </ul>
                </li>
                <li><router-link :to="({ path: 'contact' })">Contact</router-link></li>
                <li><router-link to="team">Team</router-link></li>
                <li @click="getPassword()" class="pointer"><router-link :to="{ path: 'members-only' }">Members Login</router-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
</template>
<script>
import SweetAlert from 'sweetalert2'
import Instagram from '../resources/instagram.js'
export default {
    data() {
        return {
        }
    },
    mounted: function (){
        this.getInstagram()
    },
    methods: {
        getPassword: function () {
            console.log('clicked')
            SweetAlert({
                title: 'Password required.',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                confirmButtonColor: '#00cdcd',
                preConfirm: function (password) {
                    return new Promise(function (resolve, reject) {
                        if (password === 'Powerteam') {
                            window.location.href = '/members-only'
                            resolve()
                        } else if (password === null) {
                            return
                        } else {
                            reject('Incorrect password. Please try again.')
                        }
                    })
                }
            })
        },
        getInstagram: function () {
            // Instagram.getPhotos()
            this.$jsonp('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=329480.43f69c4.13835b10df3244d896e7ea4f008a00a0')
            .then(function (response) {
                console.log(response)
            })
        }
    }
}
</script>

<style lang="css">

</style>
