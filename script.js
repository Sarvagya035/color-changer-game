const buttons = document.querySelectorAll(".button")
const area = document.querySelector('body')

buttons.forEach(function(button){
   
    console.log(button);

    button.addEventListener('click' , function(e){

        console.log(e),
        console.log(e.target);

        if(e.target.id == "grey"){
            area.style.backgroundColor = e.target.id
        }

        if(e.target.id == "white"){
            area.style.backgroundColor = e.target.id
        }
        
        if(e.target.id == "blue"){
            area.style.backgroundColor = e.target.id
        }

         if(e.target.id == "yellow"){
            area.style.backgroundColor = e.target.id
        }

    })
    

})




