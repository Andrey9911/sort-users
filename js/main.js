let id = 0
const users = []

function createUser(id,name,fname,age,email){
    this.id = id
    this.name = name
    this.fname = fname
    this.age = age
    this.email = email
    

}
let fullCard = document.querySelector('#fullCard')
let blockNewUser = document.querySelector('#blockNewUser')
let form_but = document.getElementById('form')
form_but.addEventListener('click', e => {
    console.log(form_but)
    if(blockNewUser.style.display == ''){
        blockNewUser.style.display = 'block'
        blockNewUser.style.transition = '.8s all ease-out'
        opasity(blockNewUser)

    }else if(blockNewUser.style.display == 'block') blockNewUser.style.display = ''
})

let name = document.querySelector('#name')
let img = document.querySelector('#edit_photo')
let fname = document.querySelector('#fname')
let ageInp = document.querySelector('#ageInp')
let email = document.querySelector('#email')

let input = document.querySelector('#search')
let cards = document.querySelector('#cards')
// let card = document.getElementsByClassName('card')

document.querySelector('#search_ico').addEventListener('click', e => {
    

    
    // console.log(e)
    let mass = input.value
    

            // let mass1 = cards.getElementsByClassName('card').filter(r => r.childNodes[2].childNodes[0].textContent == mass)
            console.log(mass)
            for(let j=0;j<users.length;j++){
                // if(mass == '' && (cards.getElementsByClassName('card')[j].style.display = '' || !cards.hasChildNodes(cards.getElementsByClassName('card')[j]))) document.querySelector('#warning2').innerHTML = 'ничего не найдено!'

                

                if(mass == '')cards.getElementsByClassName('card')[j].style.display = 'block'
                
                else if(mass != cards.getElementsByClassName('card')[j].childNodes[2].childNodes[0].textContent){
                    cards.getElementsByClassName('card')[j].style.display = 'none'
                    
                    // console.log(mass)
                     
                }
                else if(mass == cards.getElementsByClassName('card')[j].childNodes[2].childNodes[0].textContent){
                    cards.getElementsByClassName('card')[j].style.display = 'block'     
                    document.querySelector('#warning2').innerHTM = ''
                }  
}}
)

document.querySelector('#sub_user').addEventListener('click', (e) => {
    id++
    let user = new createUser(id,name.value, fname.value,ageInp.value,email.value)
    users.push(user)  
    // 
    console.log(checkValue(name.value, fname.value,ageInp.value,email.value))
    if(!checkValue(name.value, fname.value,ageInp.value,email.value)){
        document.querySelector('#warning').innerHTML = 'не введены поля'
        for(let i=0;i<document.querySelectorAll('#blockNewUser form input').length;i++){
            document.querySelectorAll('#blockNewUser input')[i].style.border = '1px solid red'
        }
        return
    }
        else if(checkValue(name.value, fname.value,ageInp.value,email.value) == 'некорректные данные'){
            document.querySelector('#warning').innerHTML = 'некорректные данные'
            ageInp.style.border = '1px solid red'
            return
        }
        else if(checkValue(name.value, fname.value,ageInp.value,email.value) == 'Такой Email уже используется!'){
            document.querySelector('#warning').innerHTML = 'Такой Email уже используется!'
        }
        else{ 
        document.querySelector('#warning').innerHTML = ''
        for(let i=0;i<document.querySelectorAll('#blockNewUser form input').length;i++){
            document.querySelectorAll('#blockNewUser input')[i].style.border = ''
        }
    }
    let card = document.createElement('div')
    card.setAttribute('class','card')
    card.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="close bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>'+
    '<img class="img_card" src="../img/'+showFile(img) +'" alt="">'+
    '<div class="info">'+
        '<h2 class="name">'+name.value+'</h2>'+
        '<div class="ageText">'+
            '<p>'+ageInp.value+'</p>'+
            '<p>Лeт</p>'+
        '</div>'+
    '</div>'

    cards.appendChild(card)
    blockNewUser.style.display = ''
    // console.log(document.querySelectorAll('#blockNewUser form input'))
    for(let i=0;i<document.querySelectorAll('#blockNewUser form input').length;i++){
        document.querySelectorAll('#blockNewUser input')[i].value = ''
    }
    e.preventDefault()
})
    let card
    cards.addEventListener('mouseover',e => {
        card = document.getElementsByClassName('card')
        for(let i=0;i<card.length;i++){
            card[i].addEventListener('mouseenter',e => {
                
                if(e.target.children[0].style.display == ''){
                    
                    e.target.children[0].style.display = 'block'
                    e.target.children[0].addEventListener('click', el => {
                        cards.removeChild(e.target)
                        el.stopImmediatePropagation()
                    })
                    e.target.addEventListener('click',elem => {
                        // console.log(i)
                        if(fullCard.style.display == ''){ 
                            opasity(fullCard)
                            fullCard.style.display = 'block'
                            console.log(e)
                            document.querySelector('#full_card_img').setAttribute('src',e.target.childNodes[1].src)

                            document.querySelector('#full_card_name').innerHTML = users[i].name
                            document.querySelector('#full_card_age').innerHTML = users[i].age
                            document.querySelector('#full_card_fname').innerHTML = users[i].fname
                            document.querySelector('#full_card_email').innerHTML = users[i].email
                            document.querySelector('#full_card_status').innerHTML = 'fegf'
                        }
                    })  
            }})
            card[i].addEventListener('mouseleave', e => {
                if(e.target.children[0].style.display == 'block') e.target.children[0].style.display = ''
            })
        }  // 
    })
function checkValue(name,fname,ageInp,email){
    
    if(ageInp < 0) return 'некорректные данные'

    // else if(email != ''){
    //     console.log('d')
    //     users.forEach(el => {
    //         if(email == el.email) return 'Такой Email уже используется!'
    //     })
    // }
    else if(name != '' && fname != '' && ageInp != '' && email != '' && showFile(img) != undefined) return true
    else return false
}

let a = 0
function opasity(blockNewUser){
    if(a > 1){ 
        a = 0
        return
    }
    blockNewUser.style.opacity = a 
    a += 0.2
    // console.log(a)

    setTimeout(opasity,2,blockNewUser)
}

function showFile(input) {
    let file = input.files[0];
    
    // console.log(file)
    if(file == undefined) return undefined
    
    return file.name
    
  }

document.querySelector('#card_header .close').addEventListener('click',f => {
    // console.log(f)
    f.path[3].style.display = ''
})