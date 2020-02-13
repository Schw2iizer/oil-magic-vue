import Request from '../resources/requestHandler.js'

export default {
  getPhotos: function () {
    // return Request.get('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1558666427.1677ed0.ccfbaa5a60304eea99b6f69d31b913b5')
    return Request.get('https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=329480.1677ed0.fe429ebbd0ce49bba2854a21c2490dd1')
  }
}
