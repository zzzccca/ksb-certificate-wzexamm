import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
         userinfolists:[],
         userinfo:{},
         cert:'',
         detail:{}
    },
    mutations: { 
        SET_userinfolists(s,data){
            s.userinfolists=data;
        },
        SET_userinfo(s,data){
            s.userinfo=data;
        },
        SET_cert(s,data){
            s.cert=data;
        },
        SET_detail(s,data){
            s.detail=data;
        }
    }
})