## Compose
= the action of putting two functions toghether to form a 3rd function where the output of one function is the input of the other.

eg:
```
const compoes = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum)(sum)(5);
```
