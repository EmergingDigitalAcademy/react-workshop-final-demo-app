import { shallow } from 'enzyme';
import App from './App';

import BeerList from './components/BeerList';


it('should render a <BeerList /> component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(BeerList).length).toEqual(1);
});
