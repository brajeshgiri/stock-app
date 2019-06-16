import React from 'react';
import ReactDOM from 'react-dom';
import '../setupTest';
import { shallow } from 'enzyme';
import App from '../App';


describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('component should have table', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('table')).toEqual(true);
    expect(wrapper.exists(".stock-table")).toEqual(true);
  });
});
