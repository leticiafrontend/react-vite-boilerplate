import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export const callApi = (url: string) => {
  try {
    const response = instance.get(url)
    return response
  } catch (error) {
    console.log(error)
  }
}
