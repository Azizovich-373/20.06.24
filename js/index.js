const header = document.createElement('header')
const left = document.createElement('div')
const right = document.createElement('div')
const round = document.createElement('div')
const burger = document.createElement('img')
const person = document.createElement('img')
for(let i = 0; i < 3; i++) {
    const links = document.createElement('a')
    links.innerHTML = 'ссылка'
    links.classList.add('link')
    left.append(links)
}
for(let i = 0; i < 3; i++) {
    const links_t = document.createElement('a')
    links_t.innerHTML = 'ссылка'
    links_t.classList.add('link')
    right.append(links_t)
}
round.classList.add('round')
left.classList.add('left')
right.classList.add('right')

burger.src = "./svg/burger.svg"
burger.alt = "burger"
person.src = "./svg/person.svg"
person.alt = "person"
header.append(left, right)
left.prepend(round)
right.append(burger,person)


document.body.prepend(header)