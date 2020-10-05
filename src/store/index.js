import {createStore} from 'vuex'
import {SET_COIN, SET_COINS, SET_TIME_PERIOD, SET_LOADING} from "./mutations.types"
import {API_COIN_PATH, API_COINS_PATH, TIME_PERIODS} from "@/assets/consts";
import {GET_COIN, GET_COINS} from "./actions.types"


export default createStore({
    state: {
        coins: [],
        coin: {},
        timePeriod: TIME_PERIODS.DAY,
        isLoading: false
    },
    mutations: {
        [SET_COINS]: (state, coins) => state.coins = coins,
        [SET_COIN]: (state, coin) => state.coin = coin,
        [SET_TIME_PERIOD]: (state, timePeriod) => state.timePeriod = timePeriod,
        [SET_LOADING]: (state, isLoading) => state.isLoading = isLoading
    },
    actions: {
        async [GET_COINS]({state, commit}) {
            commit(SET_LOADING, true)
            try {
                const COINS = await fetch(`${API_COINS_PATH}?timePeriod=${state.timePeriod}`).then(res => res.json()).then(res => res.data)
                commit(SET_COINS, COINS.coins)
                commit(SET_LOADING, false)
            } catch (e) {
                commit(SET_LOADING, false)
                console.log(e)
            }
        },
        async [GET_COIN]({commit}, coinID) {
            try {
                commit(SET_LOADING, true)
                const COIN = await fetch(`${API_COIN_PATH}/${coinID}`).then(res => res.json()).then(res => res.data.coin)
                console.log(COIN)
                commit(SET_COIN, COIN)
                commit(SET_LOADING, false)
            } catch (e) {
                commit(SET_LOADING, false)
                console.log(e)
            }
        }
    },
    modules: {}
})
