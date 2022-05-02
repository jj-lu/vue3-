import { login, getUserInfo } from '../../api/sys'
import { getItem, removeAllItem, setItem } from '../../utils/storage'
import router from '../../router/index'
import { setTimeStamp } from '../../utils/auth'
import { TOKEN } from '../../constant/index'
import md5 from 'md5'

export default {
  namespaced: true,
  state: {
    token: getItem(TOKEN) || '',
    userInfo: {}
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({ username, password: md5(password) })
          .then(data => {
            this.commit('user/setToken', data.token)
            setTimeStamp()
            resolve()
          })
          .catch(err => reject(err))
      })
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
