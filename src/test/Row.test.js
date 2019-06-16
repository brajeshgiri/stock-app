import React from 'react';
import '../setupTest';
import { shallow, mount } from 'enzyme';
import Row from '../components/Row';


describe('Row component', () => {

    let _wrapper

    beforeEach(() => {
        const props = { name: 'google', price: 100, date: Date.now(), color: "green" };
        _wrapper = mount(<Row {...props} />);

    })

    it('row component should have td', () => {
        expect(_wrapper.exists('tr')).toEqual(true);
        // expect(_wrapper.find("td").text()).toEqual("google");
    });


    it('should render 3 column', () => {
        expect(_wrapper.find('tr').find('td')).toHaveLength(3)
    })
});
