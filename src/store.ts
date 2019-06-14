import Vue from 'vue'
import Vuex from 'vuex'
import { getUserInfo } from './api/axios'
import { logout } from './api/sso';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: [],
      mail : null,
      userName : null
    },
    mutations: {
      updateUserInfo(state, data) {
        state.user = data;
        state.mail = data.mail;
        state.userName = data.userName;
      }
    },
    actions: {
      setUserInfo({ commit }) {
        return new Promise((resolve, reject) => {
          getUserInfo('/user').then((response: any) => {
            if (response.code === 0) {
              commit("updateUserInfo", response.data)
              resolve()
            } else {
              logout()
            }
          }).catch(error => {
            logout()
          });
        });
      },
      clearUserInfo({commit}) {
        return commit("updateUserInfo", null);
      }
    },
    getters: {
        user: state => state.user,
        mail: state => state.mail,
        userName : state => state.userName
    }
})
