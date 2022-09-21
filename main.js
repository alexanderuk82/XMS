const serviceType = document.querySelector('#serviceType')
const carrier = document.querySelector('#carrier')
const subCarrier = document.querySelector('#subCarrier')

subCarrier.addEventListener('click', () => {

 const sub = document.querySelector('.subCarrier')
 sub.classList.toggle('hidden')

})
carrier.addEventListener('click', () => {

 const sub = document.querySelector('.carrier')
 sub.classList.toggle('hidden')

})
serviceType.addEventListener('click', () => {

 const sub = document.querySelector('.serviceType')
 sub.classList.toggle('hidden')

})

