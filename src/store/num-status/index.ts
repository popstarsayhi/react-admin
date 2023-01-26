const store = {
    state: {
        num: 20
    },

    actions: { //只放同步的方法
        add1(newState: { num: number }) {
            //没有办法达到延迟和修改的效果
            // setTimeout(()=>{
            //     newState.num++
            // },1000)
            newState.num++
        },
        add2(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        },
        add3(newState: { num: number }, action: { type: string, val: number }) {
            newState.num += action.val
        },
    },

    //优化redux-thunk的异步写法
    asyncActions: {//只放异步的方法
        asyncAdd1(dispatch: Function) {
            setTimeout(() => {
                dispatch({type: 'add1'})
            }, 1000)
        }
    },

    // actionNames:{
    //     add1:"add1",
    //     add2:"add2"
    // }
    actionNames: {}
}

//想要actionName自动生成，不用每次添加一个方法就手动添加键值对
//定义一个全局的actionNames
let actionNames = {}
//遍历store.actions，然后给actionNames添加键值对
for (let key in store.actions) {
    actionNames[key] = key
}
store.actionNames = actionNames


export default store