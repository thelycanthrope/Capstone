
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import AddProduct from './AddProduct';
import toJson from 'enzyme-to-json'


configure({ adapter: new Adapter() });
describe('checking Add prods snapshot', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddProduct />);
  });

  it('taking snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})


describe('Add product checking elements', () => {
  let shallowWrapper

    beforeEach(() => {
        shallowWrapper = shallow(<AddProduct/>);
    });

    test('should have h1', () => {
      expect(shallowWrapper.find("h1").render().text()).toEqual("Add New Product")
    })

    test('should have 7 labels', () => {
      expect(shallowWrapper.find('label').length).toEqual(7)
      
    })
    
    
})
