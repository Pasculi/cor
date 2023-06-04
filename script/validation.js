const form = document.querySelectorAll('.formulario')



const formList = Array.from(form)
formList.forEach((formu)=>{
    console.log(formu.elements)
})