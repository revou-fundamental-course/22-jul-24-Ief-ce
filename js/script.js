/*INI BAGIAN JAVA SCRIPT*/



function formValidation(){
    let name= document.getElementById('input-name').value;
    console.log(name);
    
    if (name == ''){
    alert('Maaf Inputan Anda Kosong!');
    }

    else{
        alert('Sukses Menginput!');
    }
}


let indexSlide = 1;
showSlide(indexSlide);

function nextSlide(n){
    showSlide(indexSlide += n);
}

function showSlide(n){
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    if(n > listImage.length) indexSlide = 1;
    if(n < 1) indexSlide = listImage.length;

    for(let i = 0; i < listImage.length; i++){
        listImage[i].style.display = 'none';
    }

    if (listImage[indexSlide - 1]) {
        listImage[indexSlide - 1].style.display = 'block';
    }
}

setInterval(() => nextSlide(1), 3000);





