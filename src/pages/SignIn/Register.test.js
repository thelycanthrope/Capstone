import React from 'react';

import {shallow,configure,mount} from 'enzyme';
import Register from './Register';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../Store/store'

import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('taking snapshot', () => {
    let wrapper;
    let store;
    beforeEach (()=>{
        store = mockStore({
            myState: 'sample text',
          });
        wrapper=shallow(<Provider store={store}><Register/></Provider>)
    })
    it('should take snap',()=>{
        let comp=shallow(<BrowserRouter><Provider store={store}><Register/></Provider></BrowserRouter>).dive().render()
        expect(toJson(comp)).toMatchSnapshot()
    })
    it('should have 6 labels',()=>{
        let comp=shallow(<BrowserRouter><Provider store={store}><Register/></Provider></BrowserRouter>)
        
        expect(comp.dive().render().find('label').length).toEqual(6)
    })
    it('should have 6 input fields',()=>{
        let comp=shallow(<BrowserRouter><Provider store={store}><Register/></Provider></BrowserRouter>)
        
        expect(comp.dive().render().find('input').length).toEqual(6)
    })
  
    it('should have h3 tag',()=>{
        let comp=shallow(<BrowserRouter><Provider store={store}><Register/></Provider></BrowserRouter>)
        
        expect(comp.dive().render().find('h3').length).toEqual(1)
    })

    it('should have h3 tag text',()=>{
        let comp=shallow(<BrowserRouter><Provider store={store}><Register/></Provider></BrowserRouter>)
        
        // expect(comp.dive().render().find('h3')))
        expect(comp.dive().render().find('h3').text()).toEqual('New user?  fill the details to Register')
    })
})
