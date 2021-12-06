import { bottomTrigger } from '@lib'

const contractElm = document.querySelector('.contract')
const agreeButtonElm = document.getElementById('agree-button')

agreeButtonElm.addEventListener('click', () => {
  alert('Thank you for your agreement!')
})

bottomTrigger(
  contractElm,
  () => {
    // called when scroll arrives bottom
    agreeButtonElm.removeAttribute('disabled')
  },
  () => {
    // called when scroll leaves bottom
    agreeButtonElm.setAttribute('disabled', true)
  }
)
