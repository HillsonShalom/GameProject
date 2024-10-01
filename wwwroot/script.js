 const BASE_URL = ``
 
 const inpUserName = document.querySelector(`.usn`)

 const inpPassword = document.querySelector(`.psd`)

 const btnSignIn = document.querySelector(`.btnsn`)

 const btnRegister = document.querySelector(`.btnrg`)


 btnSignIn.addEventListener("click",signIn)


 const signIn = await fetch(BASE_URL,{
    method:`POST`,
    headers:{
        'content-type': 'application/json'
    },
    body:await JSON.stringify(creatingObjectFromInput)
 })


 const creatingObjectFromInput = () =>{
    if(!inpUserName || !inpPassword)
    {
        alert(`you missed input your details!`)
    }
    else{
        const newObj = {
            username:inpUserName,
            password:inpPassword
        }
    }
 }