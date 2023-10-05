// ● Given the script file callbacks.js, write a script that does the following:
// 
//o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
// message after a timeout of 500ms.
// 
//o Create a method rejectedPromise that is similar to delayedException and rejects an
// error message after a timeout of 500ms.
// 
//o Call both promises separately and handle the resolved and reject results and then output
// to the console

const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch(e) {
            console.error(e);
        }
    }, 500)
}

function resolvedPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success);
        }, 500)
    });
}

function rejectedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error: delayed exception!');
        }, 500);
    });
}



// delayedSuccess()
// delayedException()
resolvedPromise()
    .then(successMessage => console.log(successMessage))
    .catch(err => console.error(err));

rejectedPromise()
    .then(successMessage => console.log(successMessage))
    .catch(err => console.error(err));
