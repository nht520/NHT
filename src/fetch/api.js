import axios from 'axios'

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        alert('Api--ok');
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
  })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi() {
    alert('进入api.js')
    return fetch('/api/getBoardList');
  }
}
