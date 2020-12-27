import {combineReducers} from 'redux';
import modalWindow from './modalWindow';
import tariffs from './tariffs';

export default combineReducers({
    modalWindow,
    tariffs,
})