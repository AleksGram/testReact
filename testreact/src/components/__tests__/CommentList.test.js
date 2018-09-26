import React from 'react';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['Comment1', 'Comment2']
    };
    wrapped = mount (
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

it('creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
});

it('shows text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment1');
    expect(wrapped.render().text()).toContain('Comment2');
});