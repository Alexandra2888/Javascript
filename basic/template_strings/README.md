eg:
```
const greeting = "Hello" + name + "you seem to be doing" + greet
const name = "S";
const age = 34;
const pet = horse;
const greetingBest = `Hello ${name} you seem to be ${age -10}. What a lovely ${pet} do you have!`;
```

eg:
```
greeting("M", 40, "cat");
```
eg:
```function greet(name = 'A', age=30, pet='cat') {
return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} do you have!`
}
greet('M', 40, 'donkey');
```