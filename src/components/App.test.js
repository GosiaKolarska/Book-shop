import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App tests', () => {

  // it('App renders without a problem', () => {

  //symulujemy element DOM
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);

  //by ograniczycv zucycie pamieci przez testy, musimy odpiac komponent app od tego utoworzonego diva, element zostanie zniszczony 
  //   ReactDOM.unmountComponentAtNode(div);
  // })

  it('Snapshot matches', () => {

    //przekazujemy komponent ktory chcemy wyrenderowac (App)
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('Child components render', () => {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
    expect(wrapper.find('Header').exists()).toBe(true);
    expect(wrapper.find('Order').exists()).toBe(true);
    expect(wrapper.find('AdminPanel').exists()).toBe(true);
    expect(wrapper.find('Inventory').exists()).toBe(true);
  })

})
