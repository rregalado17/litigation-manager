import axios from "axios";
import * as actions from '../api';

const apiLitigations = ({dispatch}) => next => async action => {
    if (action.type !== actions.apiLitigationsCall.type) return next(action)

    next(action)

    const { url, method, data, onSuccess, onError } = action.payload;

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
        dispatch(actions.litCallFailed(error))
        if (onError) dispatch({ type: onError, payload: error });
    }
}

export default apiLitigations;
