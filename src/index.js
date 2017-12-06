import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import store from './Store/Store';
// import {Provider} from 'redux-zero/react'

const student = 'Clau'

const Index = ({student}) => {
    return(

        <App student={student}/>
    )
}

ReactDOM.render(<Index student={student}/>, document.getElementById('root'));
registerServiceWorker();