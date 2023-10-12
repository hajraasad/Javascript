
//we get resolve msg in .then
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
   console.log("Resolve!")
});


