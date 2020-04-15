import {
  request
} from './request.js'

export function getFenleiMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getFenleiGoodsdata(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
