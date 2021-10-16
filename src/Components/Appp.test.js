import Appp from './Appp'
import {shallow,configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe ('Appp testing', () =>{
    it('renders three components', () => {
        const wrapper = shallow(<Appp />);
        expect(wrapper).toMatchSnapshot()
      });
})