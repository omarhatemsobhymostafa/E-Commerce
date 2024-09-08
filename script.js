

function func(){
    document.getElementById("aside").style.display = "block" ;
    
  
}

document.getElementById("close").onclick = function(e){
    e.preventDefault()
    document.getElementById("aside").style.display = "none"
}


document.getElementById("all").onclick = function(e){
    e.preventDefault()
    document.getElementById("all").style.backgroundColor = "yellow"
    
    document.getElementById("bags").style.backgroundColor = "white"
       document.getElementById("sneaker").style.backgroundColor = "white"
}

document.getElementById("bags").onclick = function(e){
    e.preventDefault()
    document.getElementById("bags").style.backgroundColor = "yellow"
    document.getElementById("all").style.backgroundColor = "white"
        document.getElementById("sneaker").style.backgroundColor = "white"
}

document.getElementById("sneaker").onclick = function(e){
    e.preventDefault()
        document.getElementById("bags").style.backgroundColor = "white"
    document.getElementById("all").style.backgroundColor = "white"
    document.getElementById("sneaker").style.backgroundColor = "yellow"
}
document.getElementById("show-cart-aside").onclick = function(){
    document.getElementById("cart-aside").style.display = "block"
}
document.getElementById("close-cart").onclick = function(e){
    e.preventDefault()
    document.getElementById("cart-aside").style.display = "none"
}

document.getElementById("black-cross-bag-btn").onclick = function(e){
    e.preventDefault()
    const valueElement = document.getElementById('total');
   let currentValue = parseFloat(valueElement.innerText) || 0;

   const unit = document.getElementById('counter-1');
   let currentValueUnit = parseFloat(unit.innerText) || 0;

   valueElement.innerText = currentValue += 299*currentValueUnit;

        document.getElementById("produt-container").innerHTML += `  <div class="black-cross-bag-div product" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="offer1.png" alt="" class="offer-img" style="width: 70px; height: 70px; border-radius: 50%;">
                <span style="text-align: center ; ">299$</span>
                <div class="unit" style="display: flex;">

                    <span id="${'unit-counter'}"  style="padding-inline: .1rem;">${document.getElementById("counter-1").innerText}</span>
           <button id="btn-1" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="parentElement.parentElement.style.display = 'none' ; document.getElementById('total').innerHTML-=299*parseFloat(document.getElementById('counter-1').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`
            

 
    }

document.getElementById("plus-1").onclick = function(e){
e.preventDefault()
document.getElementById("counter-1").innerHTML++
}
document.getElementById("minus-1").onclick = function(e){
    e.preventDefault()
    document.getElementById("counter-1").innerHTML--
    if( document.getElementById("counter-1").innerHTML < 1){
        document.getElementById("counter-1").innerHTML = 1
    }
    }

    document.getElementById("rimbow-nike-air-max-btn").onclick = function(e){
        e.preventDefault()
         const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
     
        const unit = document.getElementById('counter-2');
        let currentValueUnit = parseFloat(unit.innerText) || 0;

        valueElement.innerText = currentValue += 300*currentValueUnit;


        document.getElementById("produt-container").innerHTML += `  <div id="rimbow-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
               
        <img src="offer2.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center ; ">300$</span>
                <div class="unit" style="display: flex;">

                    <span id="${'unit-counter'}}"  style="padding-inline: .1rem;">${document.getElementById("counter-2").innerText}</span>
           <button id="btn-2" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="parentElement.parentElement.style.display = 'none' ; document.getElementById('total').innerHTML-=300*parseFloat(document.getElementById('counter-2').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`
   
        
      
    }
  
document.getElementById("plus-2").onclick = function(e){
e.preventDefault()
document.getElementById("counter-2").innerHTML++
}
document.getElementById("minus-2").onclick = function(e){
    e.preventDefault()
    document.getElementById("counter-2").innerHTML--
    if( document.getElementById("counter-2").innerHTML < 1){
        document.getElementById("counter-2").innerHTML = 1
    }
    }


    document.getElementById("red-nike-air-max-btn").onclick = function(e){
        e.preventDefault()
         const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
     
        const unit = document.getElementById('counter-3');
        let currentValueUnit = parseFloat(unit.innerText) || 0;

        valueElement.innerText = currentValue += 500*currentValueUnit;


        document.getElementById("produt-container").innerHTML += `  <div id="red-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
               
        <img src="offer3.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center ; ">500$</span>
                <div class="unit" style="display: flex;">

                    <span id="${'unit-counter'}}"  style="padding-inline: .1rem;">${document.getElementById("counter-3").innerText}</span>
           <button id="btn-3" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="parentElement.parentElement.style.display = 'none' ; document.getElementById('total').innerHTML-=500*parseFloat(document.getElementById('counter-3').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`
   
        
      
    }
  
document.getElementById("plus-3").onclick = function(e){
e.preventDefault()
document.getElementById("counter-3").innerHTML++
}
document.getElementById("minus-3").onclick = function(e){
    e.preventDefault()
    document.getElementById("counter-3").innerHTML--
    if( document.getElementById("counter-3").innerHTML < 1){
        document.getElementById("counter-3").innerHTML = 1
    }
    }



    document.getElementById("blue-and-pink-air-max-btn").onclick = function(e){
        e.preventDefault()
         const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
     
        const unit = document.getElementById('counter-4');
        let currentValueUnit = parseFloat(unit.innerText) || 0;

        valueElement.innerText = currentValue += 500*currentValueUnit;


        document.getElementById("produt-container").innerHTML += `  <div id="blue-and-pink-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
               
        <img src="imgcard1.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center ; ">500$</span>
                <div class="unit" style="display: flex;">

                    <span id="${'unit-counter'}}"  style="padding-inline: .1rem;">${document.getElementById("counter-4").innerText}</span>
           <button id="btn-4" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="parentElement.parentElement.style.display = 'none' ; document.getElementById('total').innerHTML-=500*parseFloat(document.getElementById('counter-4').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`
   
        
      
    }
  
document.getElementById("plus-4").onclick = function(e){
e.preventDefault()
document.getElementById("counter-4").innerHTML++
}
document.getElementById("minus-4").onclick = function(e){
    e.preventDefault()
    document.getElementById("counter-4").innerHTML--
    if( document.getElementById("counter-4").innerHTML < 1){
        document.getElementById("counter-4").innerHTML = 1
    }
    }




    document.getElementById("red-cross-bag-btn").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-5');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 400 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="blue-red-cross-bag-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard2.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">400$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-5" style="padding-inline: .1rem;">${document.getElementById("counter-5").innerText}</span>
                    <button id="btn-5" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 400 * parseFloat(document.getElementById('counter-5').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-5").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-5").innerText++;
    };
    

    document.getElementById("minus-5").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-5");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };

    document.getElementById("off-white-cross-bag-btn").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-6');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 420 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="off-white-cross-bag" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard3.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">420$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-6" style="padding-inline: .1rem;">${document.getElementById("counter-6").innerText}</span>
                    <button id="btn-6" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 420 * parseFloat(document.getElementById('counter-6').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-6").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-6").innerText++;
    };
    

    document.getElementById("minus-6").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-6");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };



    document.getElementById("dark-blue-air-max-btn").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-7');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 430 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="dark-blue-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard4.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">430$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-7" style="padding-inline: .1rem;">${document.getElementById("counter-7").innerText}</span>
                    <button id="btn-7" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 430 * parseFloat(document.getElementById('counter-7').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-7").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-7").innerText++;
    };
    

    document.getElementById("minus-7").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-7");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };

    document.getElementById("baby-blue-air-max-btn").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-8');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 440 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="baby-blue-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard5.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">440$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-8" style="padding-inline: .1rem;">${document.getElementById("counter-8").innerText}</span>
                    <button id="btn-8" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 440 * parseFloat(document.getElementById('counter-8').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-8").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-8").innerText++;
    };
    

    document.getElementById("minus-8").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-8");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };

    document.getElementById("orange-and-blue-air-max-btn").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-9');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 450 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="orange-and-blue-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard6.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">450$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-9" style="padding-inline: .1rem;">${document.getElementById("counter-9").innerText}</span>
                    <button id="btn-9" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 450 * parseFloat(document.getElementById('counter-9').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-9").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-9").innerText++;
    };
    

    document.getElementById("minus-9").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-9");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };


   
    document.getElementById("orange-and-blue-air-max-btn-2").onclick = function(e){
        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-10');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 460 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="orange-and-blue-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard7.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">460$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-10" style="padding-inline: .1rem;">${document.getElementById("counter-10").innerText}</span>
                    <button id="btn-10" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 460 * parseFloat(document.getElementById('counter-10').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
    };
    

    document.getElementById("plus-10").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-10").innerText++;
    };
    

    document.getElementById("minus-10").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-10");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };

  
    document.getElementById("blue-swade-air-max-btn").onclick = function(e){
        

        e.preventDefault();
        const valueElement = document.getElementById('total');
        let currentValue = parseFloat(valueElement.innerText) || 0;
    
        const unit = document.getElementById('counter-11');
        let currentValueUnit = parseFloat(unit.innerText) || 0;
    
        valueElement.innerText = currentValue + 499 * currentValueUnit;
    
        document.getElementById("produt-container").innerHTML += `
            <div id="blue-swade-nike-air-max-div" style="display: flex; width: 4rem; align-items: center; align-content: center; gap: 4.3rem;">
                <img src="imgcard8.png" alt="" class="offer-img" style="width: 50px; height: 50px; border-radius: 50%;">
                <span style="text-align: center;">499$</span>
                <div class="unit" style="display: flex;">
                    <span id="unit-counter-11" style="padding-inline: .1rem;">${document.getElementById("counter-11").innerText}</span>
                    <button id="btn-11" style="width:20px; height:20px; border-radius:50%; padding:0; margin:0;" onclick="this.parentElement.parentElement.style.display = 'none'; document.getElementById('total').innerText -= 499 * parseFloat(document.getElementById('counter-11').innerText)"><i class="fa-solid fa-x"></i></button>
                </div>
            </div>`;
                
  
    };
    

    document.getElementById("plus-11").onclick = function(e){
        e.preventDefault();
        document.getElementById("counter-11").innerText++;
    };
    

    document.getElementById("minus-11").onclick = function(e){
        e.preventDefault();
        let counter = document.getElementById("counter-11");
        counter.innerText--;
        if (parseInt(counter.innerText) < 1) {
            counter.innerText = 1;
        }
    };
document.getElementById("home").onclick = function(e){
    e.preventDefault()
}
document.getElementById("bags").onclick = function(e){
    e.preventDefault()
}
document.getElementById("sneaker").onclick = function(e){
    e.preventDefault()
}
document.getElementById("contact").onclick = function(e){
    e.preventDefault()
}

