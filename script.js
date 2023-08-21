const order1Root = document.querySelector('[data-key="order1"]') 
const order1Biscuits = document.querySelector('.biscuits .count')
const order1Donuts = document.querySelector('.donuts .count')
const order1Pancakes = document.querySelector('.pancakes .count')
const order1Status = document.querySelector('.status')

order1Biscuits.innerText = order1Root.dataset.biscuits
order1Donuts.innerText= order1Root.dataset.donuts
order1Pancakes.innerText = order1Root.dataset.pancakes
order1Status.innerText= order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const order2Root = document.querySelector('[data-key="order2"]')
const order2Biscuits = order2Root.querySelector('.biscuits .count')
const order2Donuts = order2Root.querySelector('.donuts .count')
const order2Pancakes = order2Root.querySelector('.pancakes .count')
const order2Status = order2Root.querySelector('.status')

order2Biscuits.innerText = order2Root.dataset.biscuits
order2Donuts.innerText = order2Root.dataset.donuts
order2Pancakes.innerText= order2Root.dataset.pancakes
order2Status.innerText = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

const order3Root = document.querySelector('[data-key="order3"]')
const order3Biscuits = order3Root.querySelector('.biscuits .count')
const order3Donuts = order3Root.querySelector('.donuts .count')
const order3Pancakes = order3Root.querySelector('.pancakes .count')
const order3Status = order3Root.querySelector('.status')

order3Biscuits.innerText = order3Root.dataset.biscuits
order3Donuts.innerText= order3Root.dataset.donuts
order3Pancakes.innerText = order3Root.dataset.pancakes
order3Status.innerText = order3Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'