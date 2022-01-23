// let getId = x => document.getElementById(x);
// let sel = y => document.querySelector(y);

// let form = document['form'];
// let name = form.personName.value;
// let second = form.personSecond.value;

// form.personButton.addEventListener('click', function(){
//     let name = /^[a-zA-Z]{2,20}$/; 
//     console.log(name.test(`${form.personName.value}`));
//     if(name.test(`${form.personName.value}`) ==false){
//         sel('.name').style.background = 'rgb(243, 18, 18)';
//     }
//     else{
//         sel('.name').style.background = 'rgb(231, 192, 15)';
//     }
// })

let sel = x => document.querySelector(x);

let formTask = document['formTask'];
let formList = document['formList'];

formTask.button.addEventListener('click', function(){
    let valueText = formTask.text.value;
    console.log(valueText);

    if(valueText==''){
        alert('Виведіть будь ласка завдання');
    }
    else{
        let input = 1;
        let label = document.createElement('div');
        for(let i=0; i<input; i++){
            let checkboxCreat = document.createElement('input');
            checkboxCreat.type = 'checkbox';
            label.appendChild(checkboxCreat);
            checkboxCreat.innerHTML = valueText;
        }
        formList.appendChild(label);

        label.addEventListener('click', function(){
            if(formList.elements.length>1){
                  label.style.display = 'none'
            }
            else{
                  alert('Останній пункт з списку видалити не можна');
            }
      })
    }
})