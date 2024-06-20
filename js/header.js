const box = document.createElement('div')
const box_one = document.createElement('div')

box.classList.add('box')
box_one.classList.add('box')

const h2 = document.createElement('h2')
const p = document.createElement('p')
const h3 = document.createElement('h3')
const includes = document.createElement('div')
const h4 = document.createElement('h4')
const h5 = document.createElement('h5')

h2.classList.add('h2') 
p.classList.add('p') 
h3.classList.add('h3') 
includes.classList.add('includes') 
h4.classList.add('h4') 
h5.classList.add('h5') 

h2.innerHTML = 'Nicolas Rivera'
p.innerHTML = '1878$'
h3.innerHTML = 'Chris Diaz'
h4.innerHTML = 'Age'
h5.innerHTML = '41'

box.append(h2,p)
box_one.append(h3,includes)
includes.append(h4,h5)

document.body.prepend(box , box_one)