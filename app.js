const inputEmail = document.getElementById(`email`);
const button = document.getElementById(`button`)

button.addEventListener(`click`, (e)=>{
    e.preventDefault();
    ValidateEmail(inputEmail.value);
} )

function ValidateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    expReg.test(email);
    if(expReg.test(email)== true){
        inputEmail.style.border=`hsl(223, 87%, 63%) `;
        error.style.visibility =`hidden`
        inputEmail.value=``
    }else{
        inputEmail.style.border=`1px solid red`;
        error.style.visibility =`visible`
    }
    console.log(expReg.test(email));

}



