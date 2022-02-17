import { createStore } from 'vuex'

export default createStore({
  //state = données que l'on va donner sur vuex
  state: {
    totalFromVuex: 15,
  },

  //le même role que computed mais pour Vuex
  getters:{

    doubleDuTotal(state){
      return state.totalFromVuex * 2;
    }

    // formattedDate(state){
    //   return`${state.day}/${state.month}/${state.year}`
    // },

  },

  //déclencher par une fonction au niveau des composents
  mutations: {

setTotalFRomVuex(state, nouvelle_valeur){

  state.totalFromVuex = nouvelle_valeur
}

},

  
  actions: {
// incrementMonth(context){
//   context.commit("INCREMENT_MONTH")
// },

  },
  modules: {
  }
})
