import axios from "axios";
import * as actions from '../api';

const apiLitigations = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiLitigationsCall.type) return next(action)

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart })

    next(action)
    
    try {
        const response = await axios.request({
            baseURL: "http://localhost:3000/api/v1",
            url,
            method,
            data
        });
        dispatch(actions.litCallSuccess(response.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data})
    } catch(error) {
        dispatch(actions.litCallFailed(error.message))
        if (onError) dispatch({ type: onError, payload: error.message });
    }
}

export default apiLitigations;
