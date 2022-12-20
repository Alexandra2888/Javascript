## Promise
- an object that can produce a single value sometime in the future , either a resolved value or a reason that is not resolved (rejected).
- an object representing the eventual completion/failure of an async operation.
-allows us to use 2 keywords: resolve & reject
* when using resolve we are working with the completion of tthat HTTP request
* reject: has been some error.
=> essentially a promise is a returened object to which we attach callbacks

## State of promises
* fulfilled
* rejected
* pending

We can send data
*query string
* through the body of the request

## Async functions

- an async function is a function declared with the async keyword. Async functions are instances of AsyncFunction constructor, and the await keyword is permitted within them. The async await keywords enable async, promise-based behaviour to be written in a cleaner style, avioding the need to explicity configure promise chains.

-async function is an async function that doesn't block the code execution and it is handled by the browser.