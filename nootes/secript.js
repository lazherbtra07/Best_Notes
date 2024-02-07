let InputTitle = document.getElementById('title-note'),
  Add = document.getElementById('add'),
  InputText = document.getElementById('content-note');
  Output = document.getElementById('output');

let item, btnDle, h2, p ;

Add.addEventListener("click", function(e) {
  e.preventDefault();


  if (InputTitle.value == '' |  InputTitle.value == ' ') {
    alert("please make scure that you enter name of the note")
  }else if (InputText.value == '' |  InputText.value == ' ') { 
    alert("please make scure that you enter detait of the note");
  }else {

    item    = document.createElement('div');
    btnDle  = document.createElement('button');
    h2      = document.createElement('h2');
    p       = document.createElement('p'); 
  
    h2.innerHTML     = InputTitle.value;
    p.innerHTML      = InputText.value;
    btnDle.innerHTML = 'delete';
  
    item.classList.add('item');
    btnDle.classList.add('remove');
    h2.classList.add('title-note');
    p.classList.add('content-note ');
  
    item.appendChild(btnDle);
    item.appendChild(h2);
    item.appendChild(p);
  
    Output.appendChild(item)
  
  }
  
  
})




