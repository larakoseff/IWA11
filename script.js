const order1Root = document.querySelector('[data-key="order1"]') 
const order1Biscuits = document.querySelector('.biscuits .count')
const order1Donuts = document.querySelector('.donuts .count')
const order1Pancakes = document.querySelector('.pancakes .count')
const order1Status = document.querySelector('.status')

order1Biscuits.innerText = order1Biscuits.dataset.biscuits
order1Donuts.innerText= order1Donuts.dataset.donuts
order1Pancakes.innerText = order1Pancakes.dataset.pancakes
order1Status.innerText= order1Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const order2Root = document.querySelector('[data-key="order2"]')
const order2Biscuits = document.querySelector('.biscuits .count')
const order2Donuts = document.querySelector('.donuts .count')
const order2Pancakes = document.querySelector('.pancakes .count')
const order2Status = document.querySelector('.status')

order2Biscuits.innerText = order2Biscuits.dataset.biscuits
order2Donuts.innerText = order2Donuts.dataset.donuts
order2Pancakes.innerText= order2Pancakes.dataset.pancakes
order2Status.innerText = order2Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const order3Root = document.querySelector('[data-key="order3"]')
const order3Biscuits = document.querySelector('.biscuits .count')
const order3Donuts = document.querySelector('.donuts .count')
const order3Pancakes = document.querySelector('.pancakes .count')
const order3Status = document.querySelector('.status')

order3Biscuits.innerText = order3Biscuits.dataset.biscuits
order3Donuts.innerText= order3Donuts.dataset.donuts
order3Pancakes.innerText = order3Pancakes.dataset.pancakes
order3Status.innerText = order3Status.dataset.delivered === 'true' ? 'Delivered' : 'Pending'