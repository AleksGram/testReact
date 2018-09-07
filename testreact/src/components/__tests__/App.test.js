import React from 'react';
import App from 'components/App';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
     wrapped = shallow(<App/>);
});

it('shows comments box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comments list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});