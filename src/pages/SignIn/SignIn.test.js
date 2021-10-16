import React from 'react';

import {shallow,configure,mount} from 'enzyme';
import SignIn from './SignIn';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Store/store'

import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });
const mockStore = configureStore([]);





describe('First SignIn Test', () => {
    let wrapper;
    let store;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
        wrapper = shallow(<Provider store={store}><SignIn /></Provider>)
    })

    it('should take snap', () => {
        let comp = shallow(<BrowserRouter><Provider store={store}><SignIn /></Provider></BrowserRouter>).dive().render()
        expect(toJson(comp)).toMatchSnapshot()
    })

    it('should have 2 input', () => {
        let comp = shallow(<BrowserRouter><Provider store={store}><SignIn /></Provider></BrowserRouter>).dive().render()
        expect(comp.find('input').length).toEqual(2)
    })

    it('input email test', () => {
        let comp = shallow(<BrowserRouter><Provider store={store}><SignIn /></Provider></BrowserRouter>).dive().render()
        expect(comp.find('label').length).toEqual(2)
    })

})
