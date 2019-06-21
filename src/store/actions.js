import axios from 'axios';

export const GET_BLOCKS = 'GET_BLOCKS'
export const getBlocks = () => {
    return async (dispatch) => {       
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
            dispatch({
                type: GET_BLOCKS,
                payload: response.data
            });      
        }
        catch(error) {   
            console.log(error.message); 
        }        
    };  
} 