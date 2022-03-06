import { login } from '../../api/sys'
import { getItem, setItem } from '../../utils/storage'
import { TOKEN } from '../../constant/index'
import md5 from 'md5'

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN) || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then(data => {
            this.commit('user/setToken', data.data.data.token)
            resolve()
          })
          .catch(err => reject(err))
      })
    }
  }
}
