export function fetchLitigations() {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/litigations')
        .then(res => res.json())
        .then(litigations => dispatch({
            type: 'FETCH_LITIGATIONS', 
            payload: litigations
        }))
    }
}