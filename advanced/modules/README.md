##
Modules = Modules patterns & ES6. Modules gives us a better way to organize these variables and functions so that we can group these variables and functions that makes sense together in terms of organizing things.

##
Scopes:
-global Scopes
-module Scopes
-functional Scopes
-block Scope = const & let

##
Modules pattern = const functionModule (function () {
    ....
})()

##
Cons module patterns:
-we're still polluting global namespaces
-we have to be sure that the order of the scripts is correct


##
Solutions to problems:
-Common Js & AMD (async module definition) -> they solved the problem of designing a module in a way that we won't have the interference of global scope where we can overwrite certain variables
-common Js is with "require" (nodejs is still using it)
-AMD was designed specifically for browsers (it loads scripts/modules async)

#
ES6 Modules
- import Module1 from 'module1'
-export function x() {} and after that <script {x} from ''></script>