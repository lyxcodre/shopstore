import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addPcount(state, payLoad) {

            payLoad.count++
        },
        addToCarList(state, payLoad) {
            state.cartList.push(payLoad)
        }
    },
    actions: {
        addCar(context, payLoad) {
            return new Promise((resolve, reject) => {
                let oldPrude = null
                for (let item of context.state.cartList) {
                    if (item.iid === payLoad.iid) {
                        oldPrude = item

                    }
                }



                if (oldPrude) {

                    context.commit('addPcount', oldPrude)
                    resolve("当前商品数量 +1")

                } else {
                    payLoad.count = 1
                    payLoad.isgou = true
                    context.commit('addToCarList', payLoad)
                    resolve("已经添加到购物车！")
                }
            })


        }
    },
    modules: {}
})
export default store