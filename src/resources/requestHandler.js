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
  },
  put: function (endpoint, params) {
    return Vue.http.put(endpoint, params)
        .then((response) => {
          return response.data
        }, (error) => {
          return this.handleError(error)
        })
  },
  patch: function (endpoint, params) {
    return Vue.http.patch(endpoint, params)
        .then((response) => {
          return response.data
        }, (error) => {
          return this.handleError(error)
        })
  },
  delete: function (endpoint, params) {
    return Vue.http.delete(endpoint, params)
        .then((response) => {
          return response.data
        }, (error) => {
          return this.handleError(error)
        })
  },
  handleError: function (error) {
    var message
    switch (error.status) {
      case 500:
        message = ['500 ERROR: Please contact support.']
        Vue.toast('500 ERROR: Please contact support.', { error: true })
        break
      case 404:
        message = ['The requested data was not found.']
        Vue.toast('The requested data was not found.', { error: true })
        break
      case 400:
        message = error.body
        Vue.toast(error.body, { error: true })
        break
      case 422:
        message = error.body
        Vue.toast('The request could not be processed. Check your input.', { error: true, dismiss: false })
        break
      default:
        message = error.body
    }
    return {
      error: true,
      code: error.status,
      message: message
    }
  }

}
