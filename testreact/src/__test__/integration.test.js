import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios'
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
       status: 200,
        response: [{name: 'Fetched1'}, {name: 'Fetched2'}]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch and display list of comments', (done) => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    })
});
