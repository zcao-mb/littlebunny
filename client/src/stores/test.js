
import { testServices } from '../services/testService';

const GET_VALUES = 'GET_VALUES';


//action
export const getValues = () => {
    return {
        type: GET_VALUES,
        payload: ['value 1', 'value 2', 'value 3']
    };
};

export const actionCreators = {
    getValues: () => (dispatch) => {
        return testServices.getValues()
            .then(function(data) {
                dispatch({
                    type: GET_VALUES,
                    payload: data
                })
            }, function(error) {
                
            });

        // dispatch({
        //     type: GET_VALUES,
        //     payload: ['value 1', 'value 2', 'value 3']
        // })
    }
};


// reducer

const initialStatue = [];
export const valueReducer = (state = initialStatue, action) => {
    switch(action.type) {
        case GET_VALUES: 
            return action.payload;
        default: 
            return state;
    }
}