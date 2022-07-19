export function fetchLawyers() {
    
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/lawyers')
        .then(res => res.json())
        .then(lawyers => dispatch({
            type: 'FETCH_LAWYERS', 
            payload: lawyers
        }))
    }

}