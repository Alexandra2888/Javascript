# IIFE
= immediately invoked function expression
--
- IIFE allows us to call function immediately as Js it's executing, it's going to define what it's and right afterwrds with the brackets it's going to create a new variable environment, a new execution context => this allows us to attach private data right in here that can be accesssed by the global execution context because the chain runs downwards.


eg:


```function(){
    smth
}();
```

eg:

```function(){
    var 1;
}() => a is not defined
```
