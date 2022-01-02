// function sendRequest() {
//     return new Promise(function (res, rej) {
//         setTimeout(function () {
//             res('sure')
//         }, 2000)
//     })
// }

// async function getUsername() {
//     console.log(1);
//     let username = await sendRequest()

//     console.log(2);
//     return username
// }

// async function eric() {
//     const a = await getUsername();
//     console.log(3);
//     console.log(a);
//     console.log(4);
// }

// eric()

async function foo() {
    console.log(1);
    const a = await bar()

    console.log(a);
    console.log(3);
    return 99
}

async function bar() {
    console.log(2);
    return 6
}

console.log(4);
console.log(foo());

console.log(5);