let sentence = "The Quick brown fox jumps over the lazy dog";

// Example 1 -> Matching a word in a sentence (case-sensitive) (the test method)

// let reg1X = /dog/;
// let reg1X = /cat/;
// let search1Result = reg1X.test(sentence);
// console.log(search1Result);

// Example 2 -> Matching for Multiple Words (OR|) (case-sensitive) (the test method)

// let reg2X = /dog|fox|brown/;
// let reg2X = /dog|cat|blue/;
// let reg2X = /bird|cat|blue/;
// let search2Result = reg2X.test(sentence);
// console.log(search2Result);

// Example 3 -> Ignoring the case-sensitiveness (using the i flag) (the test method)

// let reg3X = /quick/i;
// let search3Result = reg3X.test(sentence);
// console.log(search3Result);

// Exmaple 6 -> Getting the matched word (the match method)

// let reg4X = /box/i;
// let reg4X = /fox/i;
// let search4Result = sentence.match(reg4X);
// console.log(search4Result);

// Example 5 -> Getting the matched words (using the g flag) (the match method)

// let reg5X = /the/gi;
// let search5Result = sentence.match(reg5X);
// console.log(search5Result);

// Example 6 -> Getting the matched words with the dot (the match method)

// let reg6X = /.o./g;
// let reg6X = /./g;
// let search6Result = sentence.match(reg6X);
// console.log(search6Result);

// Example 7 -> Getting the matched characters with [] (the match method)

// let reg7X = /[bdh]/g;
// let search7Result = sentence.match(reg7X);
// console.log(search7Result);

// Example 8 -> Getting the matched characters of alphabet with [] (the match method)

// let reg8X = /[a-z]/gi;
// let search8Result = sentence.match(reg8X);
// console.log(search8Result);


// let sentence =
    // "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () []";

// -------------------------------------------------------------------------------
// Example 9 -> Getting the matched numbers & characters of alphabet with [] (the match method)

// let reg9X = /[1-3x-z]/gi; // including 1, 3, x & z
// let search9Result = sentence.match(reg9X);
// console.log(search9Result);

// -------------------------------------------------------------------------------
// Example 10 -> Getting NOT the matched numbers & characters with [] (the match method) -> Negated Character Sets

// carrot vegetable
// caret ^ (6)

// let reg10X = /[^1-9a-v ]/gi; // get everything except the ones included in []
// let search10Result = sentence.match(reg10X);
// console.log(search10Result);

// -------------------------------------------------------------------------------
// Example 11 -> Getting the matched numbers & characters that occur one or more times

// let reg11X = /l+/g;
// // let reg11X = /l/g;
// let search11Result = sentence.match(reg11X);
// console.log(search11Result);

// -------------------------------------------------------------------------------
// Example 12 -> Getting the matched characters that occur zero or more times

// let sentence2 = "goooooooooogle";

// let reg12X = /go*/;
// let search12Result = sentence2.match(reg12X);
// console.log(search12Result);

// -------------------------------------------------------------------------------
// Example 13 -> Getting the matched characters with lazy matching ?

// let reg13X = /T.*/;
// let reg13X = /T.*?/;
// let search13Result = sentence.match(reg13X);
// console.log(search13Result);

// -------------------------------------------------------------------------------
// Example 14 -> Matching the beginning string patterns

// let reg14X = /^The/i;
// let search14Result = sentence.match(reg14X);
// console.log(search14Result);

// -------------------------------------------------------------------------------
// Example 15 -> Matching the ending string patterns

// let reg15X = /The$/i;
// let search15Result = sentence.match(reg15X);
// console.log(search15Result);

// -------------------------------------------------------------------------------
// Example 16 -> Matching all letters & numbers & _

// let reg16X = /\w/g; // lowercase w matches a-z & 0-9 & _
// let search16Result = sentence.match(reg16X);
// console.log(search16Result);


// let sentence =
    // "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * /";

// -------------------------------------------------------------------------------
// Example 17 -> Matching all non-letters & non-numbers & not _

// let reg17X = /\W/g; // the uppercases W matches everything that is not (a-z) & (0-9) & _
// let search17Result = sentence.match(reg17X);
// let search17Result = sentence.match(reg17X).length;
// console.log(search17Result);

// -------------------------------------------------------------------------------
// Example 18 -> Matching all numbers

// let reg18X = /\d/g;
// let search18Result = sentence.match(reg18X);
// let search18Result = sentence.match(reg18X).length;
// console.log(search18Result);

// -------------------------------------------------------------------------------
// Example 19 -> Matching all non-numbers

// let reg19X = /\D/g;
// // let search19Result = sentence.match(reg19X);
// let search19Result = sentence.match(reg19X).length;
// console.log(search19Result);

// -------------------------------------------------------------------------------
// Example 20 -> Matching all the whitespace (space, enter, tab etc)

// let reg20X = /\s/g;
// let search20Result = sentence.match(reg20X);
// // let search20Result = sentence.match(reg20X).length;
// console.log(search20Result);


// let sentence =
    // "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / google yeeeeeeeeah";

// -------------------------------------------------------------------------------
// Example 21 -> Matching all the non whitespace (space, enter, tab etc)

// let reg21X = /\S/g;
// let search21Result = sentence.match(reg21X);
// let search21Result = sentence.match(reg21X).length;
// console.log(search21Result);

// -------------------------------------------------------------------------------
// Example 22 -> Specifying upper & lower number of matches using the quantity specifiers

// let reg22X = /o{2,4}/;
// let search22Result = reg22X.test(sentence);
// console.log(search22Result);

// let reg22X = /e{3,5}/g;
// let search22Result = sentence.match(reg22X);
// console.log(search22Result);

// -------------------------------------------------------------------------------
// Example 23 -> Specifying only the lower number of matches using the quatity specifiers

// let reg23X = /o{2,}/;
// let search23Result = reg23X.test(sentence);
// console.log(search23Result);

// -------------------------------------------------------------------------------
// Example 24 -> Specifying the exact number of matches using the quantity specifiers

// let reg24X = /o{2}/;
// let search24Result = reg24X.test(sentence);
// console.log(search24Result);


// let sentence =
//     "The 11 Quick 65 brown 7210 fox _ 6054 jumps 32 over 205 the 51 lazy 103 dog really reallly @ The %% & * () [] {} - + = * / google yeeeeeeeeah";

// -------------------------------------------------------------------------------
// Example 25 -> check for all or none

// let sentence2 = "colour";
// let sentence2 = "color";

// let reg25X = /colou?r/;
// let reg25X = /colour/;
// let reg25X = /color/;
// let search25Result = reg25X.test(sentence2);
// console.log(search25Result);

// -------------------------------------------------------------------------------
// Example 26

// *-*-*-*-Positive lookahead -> testing for a +ve condition to be true

// let reg26X = /j)(?=u/;
// let reg26X = /j(?=o)/;
// let reg26X = /j(?=m)/;
// let search26Result = reg26X.test(sentence);
// console.log(search26Result);

// *-*-*-*-Negative lookahead -> testing for a -ve condition to be true

// let reg26X = /j(?!m)/;
// // let reg26X = /j(?!u)/;
// let search26Result = reg26X.test(sentence);
// // let search26Result = sentence.match(reg26X);
// console.log(search26Result);



/*  Case 1
--------------------------------Requirements--------------------------------
1- At least two letters
2- Numbers should be at the end, if there are any
3- Letters can be either lowercase or uppercase
4- If there are two letters, they cannot contain numbers
*/

// let username = "sdk";
// let username = "sk";
// let username = "k";
// let username = "k9";
// let username = "kk9";
// let username = "9kk";
// let username = "JavaScriptRocks3000";

// let usernameCheck = /^[A-Za-z]{2,}\d*$/;

// let checkStatus = usernameCheck.test(username);
// console.log(checkStatus);

/*
^[A-Za-z] -> it matches all letters uppercase and lowercase
{2,}      -> it requires the quantity of the characters to be at least 2
\d        -> it inserts matches for digits
*         -> it matches the characters that occur zero or more times
$         -> it makes sure the digits are at the end of the username
*/


/* Case 2
-----------------------------Requirements-----------------------------
1- Passwords must be at least 8 characters
2- Passwords must contain at least two consecutive digits
*/
// let password = "cosmictech12345";
// let password = "cosmictech1";
// let password = "cosmictecH1225";

// let passCheck = /(?=\w{8})(?=\D*\d{2})/;
// let checkStatus = passCheck.test(password);
// console.log(checkStatus);

/*
(?=\w{8})  -> a positive lookahead that matches 8 or more letters and digits
(?=)       -> a positive lookahead
\w         -> matches all letters and numbers and _
{8}        -> a quantity specifier that is looking for the exact number of      occurances which is 8
\D*        -> zero or more occurances of characters that are not digits
\d{2}      -> two consecutive digits
*/


// Example 27 -> Capture Groups

// let sentence = "book book";
// let reg27X = /(\w+)\s\1/;
// let reg27X = /(\w+)\s(\w+)/;

// Testing
// let regXTestResult = reg27X.test(sentence);
// console.log(regXTestResult);

// Matching
/*
\1        -> a shorthand way for repeating what is in the paranthesis
(\w+)\s\1 -> "book book"
(\w+)     -> "book"
*/
// let regXMatchResult = sentence.match(reg27X);
// console.log(regXMatchResult);

// ---------------------------------------------------------------
// let digits = "321 321 321";
// let reg27X = /^(\d+)\s\1\s\1$/;
// let reg27X = /^(\d+)\s(\d+)\s(\d+)$/;

// Testing

// let regXTestResult = reg27X.test(digits);
// console.log(regXTestResult);

// Matching
/*
\1             -> a shorthand way or repeating what is in the paranthesis
(\d+)\s\1\s\1 -> "321 321 321"
(\d+)         -> "321"
*/

// let regXMatchResult = digits.match(reg27X);
// console.log(regXMatchResult);


// Example 28 -> Searching and replacing patterns within strings

// Example 28.1
// let sentence = "My dog meows";
// let regX = /meows/;
// let replacementText = "barks";
// let replaceResult = sentence.replace(regX, replacementText);
// console.log(replaceResult);

// Example 28.2
// let replacement = "My cat barks".replace(/barks/, "meows");
// console.log(replacement);
