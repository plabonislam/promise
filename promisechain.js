function pr() {
 return new Promise((resolve, reject) => {
  reject()
 })
}

const pr1 = pr();
console.log(pr1)
pr1
 .then(function () {
  console.log("success -1")
 })
 .then(() => {
  console.log("success-2")
 })
 .catch(() => { console.log("error-1") })
 .catch(() => { console.log("error-2") })
 .then(() => { console.log("success-") })
 .catch(() => { console.log("error-4") })
 .then(() => { console.log("success-8") })
 .catch(() => { console.log("error-4") })
 .then(() => { console.log("success-18") })


