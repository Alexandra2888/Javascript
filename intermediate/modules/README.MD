## MODULES
eg:
module.exports = function add (a, b) {
    return a + b;
}
or
export const add = (a, b ) => a + b;

or
export default function add() {
    return a + b;
}

import {add} from './add';
or
import add from './add'