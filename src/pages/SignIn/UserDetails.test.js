import React from 'react'
import {shallow,configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import UserDetails from '../UserDetails';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });
const mockStore = configureStore([]);

describe('snapshot', () => {
    let store;
    let wrapper;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        })
        wrapper = shallow(<Provider store={store}><UserDetails /></Provider>)
    })


    it('snapshot test',() =>{
        const wrapper=shallow(<BrowserRouter><Provider store={store}><UserDetails /></Provider></BrowserRouter>).dive().render()
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('should have 1 h5',() =>{
        const wrapper=shallow(<BrowserRouter><Provider store={store}><UserDetails /></Provider></BrowserRouter>).dive().render()
        expect(wrapper.find('h5').length).toEqual(1)
    })
    it('should have  3 p tag',() =>{
        const wrapper=shallow(<BrowserRouter><Provider store={store}><UserDetails /></Provider></BrowserRouter>).dive().render()
        expect(wrapper.find('p').length).toEqual(3)
    })
})

