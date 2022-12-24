const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent = 'click me for more info'
btnModal.style.cssText = `
background-color: red;
    color: white;
    font-size: 1rem;
    margin: 0 auto;
    margin-left: 20px;
    display: block;
    padding: 8px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    `
    btnModal.addEventListener('mouseover',() => {
          btnModal.style.backgroundColor = 'green'
    })
    btnModal.addEventListener('mouseover',() => {
        btnModal.style.backgroundColor = 'red'
  })
  btnModal.addEventListener('click',() => {
    console.log('clicked');
})

  