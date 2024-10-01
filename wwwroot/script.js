 const BASE_URL = `http://localhost:${process.env.PORT}/`
 
 const inpUserName = document.querySelector(`.usn`)

 const inpPassword = document.querySelector(`.psd`)

 const btnSignIn = document.querySelector(`.btnsn`)

 const btnRegister = document.querySelector(`.btnrg`)


 btnSignIn.addEventListener("click",signIn)

 btnRegister.addEventListener("click",register)


 const signIn = await fetch(BASE_URL+'/auth/login',{
    method:`POST`,
    headers:{
        'content-type': 'application/json'
    },
    body:await JSON.stringify(creatingObjectFromInput)
 })

 const register = await fetch(BASE_URL+'/auth/register',{
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
        return newObj
    }
 }