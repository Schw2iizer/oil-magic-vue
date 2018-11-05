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
      <header class="header coporate-header">
        <div class="sticky">
          <div class="container">
            <div class="logo">
                <a href="/">
                    <img class="oil-magic-logo" src="images/logo.png" alt="">
                </a>
            </div>
            <nav>
              <ul id="ownmenu" class="ownmenu">
                <li class="active"><a href="">Home</a></li>
                <li><a>About Me</a>
                  <ul class="dropdown">
                    <li>
                        <router-link :to="{ path: '/about' }">Our Story</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: 'favorite-products'}">Our Favorite Products</router-link>
                    </li>
                    <li>
                        <router-link :to="{path: 'healthy-lifestyle'}">Why We Choose a Natural Lifestyle</router-link>
                    </li>
                  </ul>
                </li>
                <li><a>Why Doterra?</a>
                  <ul class="dropdown">
                    <li><router-link :to="{ path: 'why-doterra' }">Why Doterra Oils?</router-link></li>
                    <li><router-link :to="{ path: 'member-benefits' }">Membership Benefits</router-link></li>
                    <li><router-link :to="{ path: 'co-impact-sourcing' }">Co-impact Sourcing</router-link></li>
                  </ul>
                </li>
                <li><a>About Oils</a>
                  <ul class="dropdown">
                    <li><router-link :to="{ path: 'how-to-use'}">How to Use Doterra Essential Oils</router-link></li>
                    <li><router-link :to="{ path: 'resources'}">Doterra Resourcecs</router-link></li>
                  </ul>
                </li>
                <li><a>Get Started</a>
                  <ul class="dropdown">
                    <li><a href="https://www.mydoterra.com/Application/index.cfm?EnrollerID=1266154&Theme=DefaultTheme&ReturnURL=www.mydoterra.com/michellecannon88&LNG=en_dot&iact=1" target="_blank"> Get Started with Me</a></li>
                  </ul>
                </li>
                <!-- <li><router-link :to="{ path: 'contact' }">Contact</router-link></li> -->
                <li><router-link :to="{path: 'team'}">Team</router-link></li>
                <li @click="getPassword()" class="pointer copy-link-styles">Members Login</li>
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

    },
    methods: {
        getPassword: function () {
            SweetAlert({
                title: 'Password required.',
                input: 'text',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                confirmButtonColor: '#00cdcd',
                preConfirm: function (password) {
                    return new Promise(function (resolve, reject) {
                        if (password === 'Oilmagicdreamteam') {
                            window.location.href = '/#/members-only'
                            resolve()
                        } else if (password === null) {
                            return
                        } else {
                            reject('Incorrect password. Please try again.')
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="css">
    .header-wrapper .copy-link-styles {
        color: #141414;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        padding: 15px 0;
        border-color: transparent;
        margin: 0;
        margin-top: 1px;
        line-height: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
        float: left;
        font-size: 13px;
        font-weight: normal;
        position: relative;
    }

    .header-wrapper .ownmenu {
      cursor: pointer;
    }

</style>
