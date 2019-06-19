import * as type from './actions';

const initialState = {   
    visibleBlocks: []
}

export default function (state = initialState, action){ 
    switch(action.type){ 
        case type.GET_BLOCKS: {  
            const shuffled = action.payload.sort(() => 0.5 - Math.random());
            const random = shuffled.slice(0, 6);           
            return {...state,  visibleBlocks: random}
        }
        default:
            return state
    }
}