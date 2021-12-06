// import axios from 'axios';
// var baseUrl = '/api/';

export default{
    state:{
        user: {token: ''}
    },
    mutations:{
        SET_USER_TO_STATE: (state, payload) => {
            state.user = payload
        },
        UNSET_USER_FROM_STATE: (state) => {
            state.user = {token: ''};
        },
        LOG_OUT: (state) =>{
           sessionStorage.clear();
           state.user = {token: ''};
        }
    },
    actions: {
        SIGNIN({commit}, payload) {
          return axios({
              method: "POST",
              url: baseUrl + `users/login`,
              data: {
                email: payload.email,
                password: payload.password
              },
            })
            .then((e) => {
              commit('SET_USER_TO_STATE', e.data);
              sessionStorage.setItem('user', JSON.stringify(e.data));
              payload.router.push({path: '/main'});
              // return e;
            })
            .catch((error) => {
              return error;
            })
        },
        STATE_CHANGED({commit}, payload){
            commit('SET_USER_TO_STATE', payload);
        },
        LOGOUT({commit}){
          commit('LOG_OUT');
        }
    },
    getters:{
        getUser: state => state.user
    }
}
