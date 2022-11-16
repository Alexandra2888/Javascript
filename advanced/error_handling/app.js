function fail() {
    try {
        console.log('this works');
    } catch (error) {
        console.log('we made an error', error);
    }
}
fail();

// if I make console.log('we made an error', error.stack) -> a stack of errors

//eg
function fail2() {
    try {
        throw new Error('oopsie!')
        console.log('this works');
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('still good');
        return 'returning fail';
    }
    console.log('!');
}
fail2();

//eg
try {
    try {
        smth ()
    } catch (e) {
        throw new Error
    }
} catch (e) {
    console.log('got it', error)
}

//eg
try {
    setTimeout(function () {
        fakeVariable;
    }, 1000)
} catch (e) {
    console.log('got it', error);
}


//ASYNC ERROR HANDLING

//eg
Promise.resolve('async fail')
    .then(response => {
        throw new Error('1 fail')
        return response;
    }).then(response => {
        console.log(response);
    }).catch(err => {
        throw new Error('2')
    })
    .then(response => {
        console.log(response.message)
    }).catch(error => {
        console.log('final error');
    })

    //eg
    (async function () {
        try {
            await Promise.reject('oops')
        } catch (err) {
            console.log(err);
        }
        console.log('is good');
    })()

    //eg
    // (async function () {
    //     try {
    //         await Promise.resolve('oops 1')
    //         await Promise.reject('oops2')
    //     }
    //     console.log('is this good?')
    // })()


    //EXTENDING ERRORS

class AthentificationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'auth error';
        this.favouriteSnack = 'grapes'
        }
}
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'database error';
        this.favouriteSnack = 'grapes';
    }
}

// class PermissionError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'permission error';
//         this.favouriteSnack = 'grapes';
//     }
// }
// const a = new DatabaseError('oops');
// const a = new DatabaseError('oopsie');
// a.instanceof  DatabaseError;