import Vue from 'vue'
import VueResource from 'vue-resource-2'

Vue.use(VueResource)

export default {
  get: function (endpoint, params) {
    return Vue.http.get(endpoint, { params: params })
        .then((response) => {
          return response.data
        }, (error) => {
          return this.handleError(error)
        })
  },
  post: function (endpoint, params) {
    return Vue.http.post(endpoint, params)
        .then((response) => {
          return response.data
        }, (error) => {
          return this.handleError(error)
        })
  }
}
