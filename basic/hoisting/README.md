## hoisting
= the behaviour of moving the variables/ function declaration to the top of their respective environment during compilation.
= the entire process of compilation / parsing and code execution

! declaration using let & const hoist in a different way ! (in doc MDN says they don't hoist but it's innacurate)

## In the compilation stage we want to create a plan/blueprint for formal declarations and the scopes that they belong to.

## In the execution stage we know what are our identifiers and we know what scope do they belong to -> we access these identifiers and we want to find out wehetever they are in target reference or they are in the source reference. If tehy are in target reference -> grab the value of that and allocate spoace in memory to it. If we are in source posiiton -> takes us all way to where that source points.


## Temporal dead zone (TDZ)
* lexical declaration -> let bindingIdentifier(lexicalBinding) = AssignmentExpression
* lexical declaration -> const bindingIdentifier(lexicalBinding) = AssigningExpression

* var -> originally it's in an undefined state
* let/const -> originally in an undefined state