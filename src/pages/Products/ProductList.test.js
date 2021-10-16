import React from 'react';
import {shallow,configure,mount} from 'enzyme';
import ProductsList from './ProductList';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Products from './Products'


configure({ adapter: new Adapter() });

describe('When valid products array props is passed to ProductsList component', () => {

    let props;
    let wrapper;
    beforeEach(() => {
        props = {
            products: [
                {
                    "pname": "SS Master 1000 English Willow Cricket Bat",
                    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni et nemo, voluptate sed cum voluptates voluptatum provident",
                    "manufacturer": "Sareen Sports Industries",
                    "price": 6300,
                    "quantity": "78",
                    "url": "https://www.onlinecricstore.com/media/catalog/product/cache/26c91cbb37c57611b1daf32fd10f6d8a/u/n/untitled-1_25.png",
                    "id": 1,
                    "category": "bat"
                  },
                  {
                    "pname": "Kookaburra Kahuna 750 Wicket Keeping Gloves",
                    "quantity": 45,
                    "price": 2900,
                    "url": "https://www.onlinecricstore.com/media/catalog/product/cache/26c91cbb37c57611b1daf32fd10f6d8a/u/n/untitled-1_11_1.png",
                    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni et nemo, voluptate sed cum voluptates voluptatum provident",
                    "manufacturer": "Kookaburra Sports",
                    "id": 10,
                    "category": "gloves"
                  },
                  {
                    "pname": "SG Club Leather Cricket Red Ball",
                    "quantity": 36,
                    "price": 1500,
                    "url": "https://www.onlinecricstore.com/media/catalog/product/cache/26c91cbb37c57611b1daf32fd10f6d8a/c/l/club2.jpg",
                    "description": " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magni et nemo, voluptate sed cum voluptates voluptatum provident",
                    "manufacturer": "SG Sports",
                    "id": 14,
                    "category": "ball"
                  }
            ]
        }
        wrapper = shallow(<ProductsList {...props}/>);
    });

    it('snapshot', () =>{
        expect(toJson(wrapper)).toMatchSnapshot();
    })
   
    it('first product name test', () => {
      
      expect(wrapper.find(Products).at(0).dive().find('#details').text()).toEqual('SS Master 1000 English Willow Cricket Bat')
      
    })
    it('2nd product price',() =>{
        expect(wrapper.find(Products).at(1).dive().find('#price').text()).toEqual('₹ 2900')
    })
})
describe('When Products array props passed to ProductList Component is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            products: null
        }
        wrapper = shallow(<ProductsList {...props}/>);
    });

    it('should not crash and no Product component is rendered', () => {
        let product = wrapper.find('Product');
        expect(product.length).toEqual(0);
    });

});