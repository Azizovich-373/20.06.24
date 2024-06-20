const box_cloth = document.createElement('div')
const box_white = document.createElement('div')
const img = document.createElement('img')
const h1 = document.createElement('h1')
const h6 = document.createElement('h6')
const cost = document.createElement('div')

const elem_one = document.createElement('div')
const elem_two = document.createElement('div')
const elem_three = document.createElement('div')

const dollar = document.createElement('img')
const star = document.createElement('img')
const box = document.createElement('img')

const dollar_a = document.createElement('a')
const star_a = document.createElement('a')
const box_a = document.createElement('a')

const button = document.createElement('button')


box_cloth.classList.add('box_cloth') 
box_white.classList.add('box_white')  
h1.classList.add('h1') 
h6.classList.add('h6')
h1.innerHTML = 'MEN’S CLOTHING (120)' 
h6.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
cost.classList.add('cost') 
dollar.src = './svg/dollar.svg'
star.src = './svg/star.svg'
box.src = './svg/box.svg'
dollar_a.classList.add('a')
star_a.classList.add('a')
box_a.classList.add('a')
dollar_a.innerHTML = '109'
star_a.innerHTML = '3.9'
box_a.innerHTML = '120'
button.classList.add('buton')
button.innerHTML = 'В избранное'
img.src = './backpag.png'

box_cloth.append(box_white,h1,h6,cost,button)
box_white.append(img)
cost.append(elem_one,elem_two,elem_three)
elem_one.append(dollar,dollar_a)
elem_two.append(star,star_a)
elem_three.append(box,box_a)

document.body.prepend(box_cloth)