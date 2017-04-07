import Request from '../resources/requestHandler.js'

export default {
  getPhotos: function () {
    return Request.get('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=329480.43f69c4.13835b10df3244d896e7ea4f008a00a0')
  }
}
