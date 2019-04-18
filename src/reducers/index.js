const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'



const initialState = 0



export default function (state = initialState, action){
    console.log(action)
    switch (action.type){
        case INCREMENTAR:
            return state + 1

        case DECREMENTAR:
            return state-1
        default
            return state

    }
    
}