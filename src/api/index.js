import axios from "@/utils/axios";

export const fetchList = params => axios({ url: '/api/v1/topics', method: 'get', params })
export const fetchGetImage = params => axios({ url: '/sjbz/', method: 'get', params })


export default {
  fetchList,
  fetchGetImage
}