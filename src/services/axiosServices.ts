import { instance as axiosClient } from '../network/index'

const axiosService = {
  getAll(params: object | string, url: string): Promise<object> {
    return axiosClient.get(url, { params })
  },

  getById(id: string | number, url: string): Promise<object> {
    const base_url = `${url}${id}`
    return axiosClient.get(base_url)
  },

  post(data: object, url: string): Promise<object> {
    const base_url = `${url}`
    return axiosClient.post(base_url, data)
  },

  update(data: Partial<any>, url: string): Promise<object> {
    const base_url = `${url}${data.userId}`
    return axiosClient.patch(base_url, data.bodyReq)
  },

  delete(id: string | number, url: string): Promise<object> {
    const base_url = `${url}${id}`
    return axiosClient.delete(base_url)
  },
}

export default axiosService
