import axios from 'axios';

import { SAVE_COMMENT } from "./types";
import { FETCH_COMMENTS } from "./types";
import { CHANGE_AUTH } from "./types";

export function saveComment (comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth (isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

