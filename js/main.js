var Form = document.querySelector('.form')
var inp = document.querySelector('.inp1')
var list = document.querySelector('.list')
var link = document.querySelector('.link')
var ar = []


Form.addEventListener('submit', (e) => {
    e.preventDefault()
    ar.push(inp.value)
    fnFor(ar)
})

function fnFor (ar)  {
    list.innerHTML =''
    for (let i = 0; i < ar.length; i++) {
        var newB = document.createElement('b')
        var newli = document.createElement('li')
        var newbutton = document.createElement('button')
        var newButton2 = document.createElement('button')
        var newimg = document.createElement('img')
        newimg.setAttribute('src',  link.value)
        newbutton.textContent = 'delate'
        newButton2.textContent = 'update'
        newB.textContent =  ar[i]
        newli.appendChild(newB)
        newli.appendChild(newimg)
        newli.appendChild(newbutton)
        newli.appendChild(newButton2)
        list.appendChild(newli)
        
    }
}