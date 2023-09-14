console.log("start")

function important(name, isTrue) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (isTrue) {
    resolve("subscribe")
   }
   else {
    reject("failed to subscrie")
   }
  }, 10)
 })
}

function likedVideo(name, isTrue) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (isTrue) {
    resolve("likedVideo")
   }
   else {
    reject("failed to likedVideo")
   }
  }, 10)
 })
}



function shareVideo(name, isTrue) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (isTrue) {
    resolve("shareVideo")
   }
   else {
    reject("failed to shareVideo")
   }
  }, 100)
 })
}

//promise that breaks chain ..after that it will go to error..
//from that error chain it again follow..
//here after braking chain catch block executes
//after the catch no promise chain so it will stop
important("hey", true)
 .then(res => {
  console.log(res)
  return likedVideo("fan", false)
 })
 .then(res => {
  console.log(res)
  return shareVideo("fan", false)
 })
 .then(res=>{
  console.log(res)
 })
 .catch(err => console.log(err))


 // promise that executes first will get resolve or reject
 // rest of will not reslove or reject
 Promise.race([
  important("hey", true),
  likedVideo("fan", true),
  shareVideo("fan", false)
 ])
 .then(res=>console.log(res))
 .catch(err=>console.log(err))


 //

console.log("end")