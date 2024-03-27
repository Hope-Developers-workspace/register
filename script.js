const sec1 = document.querySelector(".sec-1");
const sec2 = document.querySelector(".sec-2");
const back = document.querySelector("#back");
const formEl = document.querySelector(".form-el form");

    // Section 1

formEl.addEventListener('submit', (e) =>{
     e.preventDefault();
       sec2.style.display = "block";
       sec1.style.display = 'none';         
  });

        // Section 2
 
   back.addEventListener('click', (e)  => {
        e.preventDefault();
       sec1.style.display = 'block';
       sec2.style.display = 'none';
   });



    