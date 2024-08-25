'use client'
export default function Page() {
    return <p>
        customer page {mainProcess()}
    </p>

}

function mainProcess() {
    let promise = new Promise(function (resolve, reject){
        setTimeout(() => reject("success"), 1000)
    })
    promise.then((message) => {
        console.log(`success ${message}`)
    })
    promise.then((message) => {
        console.log(`success ${message}`)
    }, (message) => {
        console.log(`fail${message}`)
    })
    console.log("hh")
}






