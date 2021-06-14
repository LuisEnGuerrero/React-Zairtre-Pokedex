import axios from 'axios'
import Global from '../Global';

const baseUrl = Global.url

const getPoke = name => {
  const promise = axios(
    `${baseUrl}pokemon/${encodeURIComponent(name.toLowerCase())}`,
    {
      method: 'GET'
    }
  )

  return promise
}

export default getPoke
