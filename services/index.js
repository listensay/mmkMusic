import { baseUrl } from './config'

class musicRequest {
  constructor() {
    this.baseUrl = baseUrl
  }

  request(reqUrl, options) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + reqUrl,
        ...options,
        success: (result) => {
          resolve(result.data)
        },
        fail: (err) => {
          reject(err)
        },
      })
    })
  }
  /**
   * get请求
   * @param { string } url 请求路径
   * @param {*} data 请求数据
   * @param {*} options 请求选项 例如headers...
   * @returns 请求数据
   */
  get(url, data = null, options = null) {
    return this.request(url, {
      data,
      method: 'GET',
      ...options
    })
  }
  /**
   * post请求
   * @param { string } url 请求路径
   * @param {*} data 请求数据
   * @param {*} options 请求选项 例如headers...
   * @returns 请求数据
   */
  post(url, data, options) {
    return this.request(url, {
      data,
      method: 'POST',
      ...options
    })
  }
}

export default musicRequest = new musicRequest()