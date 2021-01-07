import faker from 'faker'

let cartText = `<div>You have ${faker.random.number()}</div>`

document.querySelector('#dev-cart').innerHTML = cartText