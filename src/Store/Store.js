import createStore from 'redux-zero';

const portfolio = ['a','b','c']
const initialState = {
   portfolio: portfolio,
};

const store = createStore(initialState);
export default store;