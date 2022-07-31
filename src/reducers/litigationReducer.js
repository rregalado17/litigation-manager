export default function litigationReducer(state = {litigations: []}, action) {
    switch (action.type){
        case 'FETCH_LITIGATIONS':
            return {litigations: action.payload}
        default:
            return state
    
        }
    }