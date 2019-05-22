import axios from 'axios'
export default {
  post(url, parmas, res) {
    axios({
      method: 'post',
      url: url,
      cache: false,
      params: parmas,
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        'Content-Type': 'application/json; charset=UTF-8',
        // 'connection': 'keep-alive'
      }
    })
  }
}
