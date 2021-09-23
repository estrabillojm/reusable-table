import axios from 'axios'
const user = {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        GET_ALL_USERS: (state, data)=>{
            state.users = data
        }
    },
    actions: {
        getAllUsers: ({ commit })=>{
            axios.get('/users').then(res=>{
                commit('GET_ALL_USERS', res.data)
            })
        }
    }
}

export default user