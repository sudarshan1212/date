const date=document.querySelector('#date')
const popup=document.querySelector('#popup')
show=document.querySelector('#show')
// data=date.ariaValueMax
function popu(){
    popup.classList.remove('hidden')
    let hi=date.value
    let ji=hi.replace(/-/g,"/")
    show.innerText=ji.split('/').reverse().join('/')
    // show.innerHtml=hi
    console.log(hi);
}
function closepopup() {
    popup.classList.add('hidden')
}

function hi(){

}