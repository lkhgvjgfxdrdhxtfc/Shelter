let burgericon = document.querySelector('.burger-icon');
let burgericon1 = document.querySelector('.burger-icon1');
let burgermenuwrapper= document.querySelector('.burger-menu-wrapper');

burgericon.addEventListener('click', function(){ 
document.querySelector('body').classList.add('modal-active');
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});


burgericon1.addEventListener('click', function(){ 
document.querySelector('body').classList.remove('modal-active');
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});

let close1 = document.querySelector('.close1');

close1.addEventListener('click', function(){ 
document.querySelector('body').classList.remove('modal-active');
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});

let close2 = document.querySelector('.close2');

close2.addEventListener('click', function(){ 
document.querySelector('body').classList.remove('modal-active');
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});

let close3 = document.querySelector('.close3');

close3.addEventListener('click', function(){
document.querySelector('body').classList.remove('modal-active'); 
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});

let close4 = document.querySelector('.close4');

close4.addEventListener('click', function(){ 
document.querySelector('body').classList.remove('modal-active');
burgericon1.classList.toggle('burger-rotate'); 
burgermenuwrapper.classList.toggle('active-b-m-wrp');
});


document.addEventListener ('click', function(evt) {
  	if(evt.target === burgermenuwrapper) {
document.querySelector('body').classList.remove('modal-active');
    	burgericon1.classList.toggle('burger-rotate'); 
        burgermenuwrapper.classList.toggle('active-b-m-wrp');
    	}
  	})




const KAT = document.querySelector('.kat');
const JEN = document.querySelector('.jen');
const WOOD = document.querySelector('.wood');
const SOPH = document.querySelector('.soph');
const TIM = document.querySelector('.tim');
const CHAR = document.querySelector('.char');
const SCAR = document.querySelector('.scar');
const FRED = document.querySelector('.fred');

const MODAL_BG = document.querySelector('.modal-bg');

const MODAL_TITLE = document.querySelector('.modal-title');
const MODAL_SUBTITLE = document.querySelector('.modal-subtitle');
const PET_FOTO_MODAL = document.querySelector('.pet-foto-modal');
const MODAL_BREED = document.querySelector('.breed');
const MODAL_DESCRIPTION = document.querySelector('.description');
const MODAL_AGE = document.querySelector('.age');




KAT.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Katrine";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.";
MODAL_AGE.innerHTML ="1 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/katrine.png)";
});


JEN.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Jennifer";
MODAL_BREED.innerHTML = "Dog - Labrador";
MODAL_DESCRIPTION.innerHTML = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
MODAL_AGE.innerHTML ="2 months;";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/jennifer.png)";
});

WOOD.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Woody";
MODAL_BREED.innerHTML = "Dog - Golden Retriever";
MODAL_DESCRIPTION.innerHTML = "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.";
MODAL_AGE.innerHTML ="3,5 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/woody.png)";
});

SOPH.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Sophia";
MODAL_BREED.innerHTML = "Dog - Shih tzu";
MODAL_DESCRIPTION.innerHTML = "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.";
MODAL_AGE.innerHTML ="6 months";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/sophia.png)";
});

TIM.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Timmy";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.";
MODAL_AGE.innerHTML ="1,5 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/timmy.png)";
});

CHAR.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Charly";
MODAL_BREED.innerHTML = "Dog - Jack Russell Terrier";
MODAL_DESCRIPTION.innerHTML = "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.";
MODAL_AGE.innerHTML ="3 years;";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/charly.png)";
});

SCAR.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Scarlett";
MODAL_BREED.innerHTML = "Dog - Jack Russell Terrier";
MODAL_DESCRIPTION.innerHTML = "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.";
MODAL_AGE.innerHTML ="7 months";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/scarlett.png)";
});

FRED.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Freddie";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.";
MODAL_AGE.innerHTML ="2 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/freddie.png)";
});

document.addEventListener ('click', function(evt) {
  	if(evt.target === MODAL_BG) {

        MODAL_BG.classList.remove('active');
    	}
  	});

	document.addEventListener ('keydown', function(evt) {
  	if(evt.keyCode == 27) {

  	MODAL_BG.classList.remove('active');
   	}
  	});


let slide = document.querySelectorAll('.card-container');
let currentSlide = 0; 







function getSlideNext(){

	goToSlide(currentSlide+1);

}

function getSlidePrev(){

	goToSlide(currentSlide-1);

}



/*
kat
jen
wood
soph
tim
char
scar
fred
*/


function goToSlide(n){
	slide[currentSlide].className = 'card-container';
	currentSlide = (n+slide.length)%slide.length;
	slide[currentSlide].className = 'card-container showing';
        document.querySelector('.page').innerHTML = n+1;

console.log(slide.length);


let bgNum = Math.ceil(8*Math.random());

function getClass1() {
let num1 = bgNum;

if (num1===1) {
return 'kat';
} else if (num1 === 2) {
return 'jen';
} else if (num1 === 3) {
return 'wood';
} else if (num1 === 4) {
return 'soph';
} else if (num1 === 5) {
return 'tim';
} else if (num1 === 6) {
return 'char';
} else if (num1 === 7) {
return 'scar';
} else if (num1 === 8) {
return 'fred';
} 
};

function getClass2() {
let num2 = bgNum+1;
if ((num2===1)||(num2===9)) {
return 'kat';
} else if ((num2 === 2)||(num2===10)) {
return 'jen';
} else if ((num2 === 3)||(num2===11)) {
return 'wood';
} else if ((num2 === 4)||(num2===12)) {
return 'soph';
} else if ((num2 === 5)||(num2===13)) {
return 'tim';
} else if ((num2 === 6)||(num2===14)) {
return 'char';
} else if ((num2 === 7)||(num2===15)) {
return 'scar';
} else if ((num2 === 8)||(num2===16)) {
return 'fred';
} 
};

function getClass3() {
let num3 = bgNum+2;
if ((num3===1)||(num3===9)) {
return 'kat';
} else if ((num3 === 2)||(num3===10)) {
return 'jen';
} else if ((num3 === 3)||(num3===11)) {
return 'wood';
} else if ((num3 === 4)||(num3===12)) {
return 'soph';
} else if ((num3 === 5)||(num3===13)) {
return 'tim';
} else if ((num3 === 6)||(num3===14)) {
return 'char';
} else if ((num3 === 7)||(num3===15)) {
return 'scar';
} else if ((num3 === 8)||(num3===16)) {
return 'fred';
} 
};

function getClass4() {
let num4 = bgNum+3;
if ((num4===1)||(num4===9)) {
return 'kat';
} else if ((num4 === 2)||(num4===10)) {
return 'jen';
} else if ((num4 === 3)||(num4===11)) {
return 'wood';
} else if ((num4 === 4)||(num4===12)) {
return 'soph';
} else if ((num4 === 5)||(num4===13)) {
return 'tim';
} else if ((num4 === 6)||(num4===14)) {
return 'char';
} else if ((num4 === 7)||(num4===15)) {
return 'scar';
} else if ((num4 === 8)||(num4===16)) {
return 'fred';
} 
};


function getClass5() {
let num5 = bgNum+4;
if ((num5===1)||(num5===9)) {
return 'kat';
} else if ((num5 === 2)||(num5===10)) {
return 'jen';
} else if ((num5 === 3)||(num5===11)) {
return 'wood';
} else if ((num5 === 4)||(num5===12)) {
return 'soph';
} else if ((num5 === 5)||(num5===13)) {
return 'tim';
} else if ((num5 === 6)||(num5===14)) {
return 'char';
} else if ((num5 === 7)||(num5===15)) {
return 'scar';
} else if ((num5 === 8)||(num5===16)) {
return 'fred';
} 
};

function getClass6() {
let num6 = bgNum+5;
if ((num6===1)||(num6===9)) {
return 'kat';
} else if ((num6 === 2)||(num6===10)) {
return 'jen';
} else if ((num6 === 3)||(num6===11)) {
return 'wood';
} else if ((num6 === 4)||(num6===12)) {
return 'soph';
} else if ((num6 === 5)||(num6===13)) {
return 'tim';
} else if ((num6 === 6)||(num6===14)) {
return 'char';
} else if ((num6 === 7)||(num6===15)) {
return 'scar';
} else if ((num6 === 8)||(num6===16)) {
return 'fred';
} 
};

function getClass7() {
let num7 = bgNum+6;
if ((num7===1)||(num7===9)) {
return 'kat';
} else if ((num7 === 2)||(num7===10)) {
return 'jen';
} else if ((num7 === 3)||(num7===11)) {
return 'wood';
} else if ((num7 === 4)||(num7===12)) {
return 'soph';
} else if ((num7 === 5)||(num7===13)) {
return 'tim';
} else if ((num7 === 6)||(num7===14)) {
return 'char';
} else if ((num7 === 7)||(num7===15)) {
return 'scar';
} else if ((num7 === 8)||(num7===16)) {
return 'fred';
} 
};

function getClass8() {
let num8 = bgNum+7;
if ((num8===1)||(num8===9)) {
return 'kat';
} else if ((num8 === 2)||(num8 === 10)) {
return 'jen';
} else if ((num8 === 3)||(num8 === 11)) {
return 'wood';
} else if ((num8 === 4)||(num8 === 12)) {
return 'soph';
} else if ((num8 === 5)||(num8 === 13)) {
return 'tim';
} else if ((num8 === 6)||(num8 === 14)) {
return 'char';
} else if ((num8 === 7)||(num8 === 15)) {
return 'scar';
} else if ((num8 === 8)||(num8 === 16)) {
return 'fred';
} 
};


console.log(`.name${bgNum}`);
console.log(`.name${bgNum+1}`);




if (document.querySelector('#two').classList.contains('showing')) {

const PETCARD1 = document.querySelector('.pets1');
const PETCARD2 = document.querySelector('.pets2');
const PETCARD3 = document.querySelector('.pets3');
const PETCARD4 = document.querySelector('.pets4');
const PETCARD5 = document.querySelector('.pets5');
const PETCARD6 = document.querySelector('.pets6');
const PETCARD7 = document.querySelector('.pets7');
const PETCARD8 = document.querySelector('.pets8');


PETCARD1.className = `pets1 ${getClass1()}`;
PETCARD2.className = `pets2 ${getClass2()}`;
PETCARD3.className = `pets3 ${getClass3()}`;
PETCARD4.className = `pets4 ${getClass4()}`;
PETCARD5.className = `pets5 ${getClass5()}`;
PETCARD6.className = `pets6 ${getClass6()}`;
PETCARD7.className = `pets7 ${getClass7()}`;
PETCARD8.className = `pets8 ${getClass8()}`;


console.log(document.querySelector('#two').classList.contains('showing'));

document.querySelector('#two').querySelector('.kat').querySelector('.pet-name').innerHTML = "Katrine";
document.querySelector('#two').querySelector('.kat').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/katrine.png)";


document.querySelector('#two').querySelector('.jen').querySelector('.pet-name').innerHTML  = "Jennifer";
document.querySelector('#two').querySelector('.jen').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/jennifer.png)";


document.querySelector('#two').querySelector('.wood').querySelector('.pet-name').innerHTML = "Woody";
document.querySelector('#two').querySelector('.wood').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/woody.png)";


document.querySelector('#two').querySelector('.soph').querySelector('.pet-name').innerHTML  = "Sophia";
document.querySelector('#two').querySelector('.soph').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/sophia.png)";


document.querySelector('#two').querySelector('.tim').querySelector('.pet-name').innerHTML = "Timmy";
document.querySelector('#two').querySelector('.tim').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/timmy.png)";


document.querySelector('#two').querySelector('.char').querySelector('.pet-name').innerHTML  = "Charly";
document.querySelector('#two').querySelector('.char').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/charly.png)";


document.querySelector('#two').querySelector('.scar').querySelector('.pet-name').innerHTML  = "Scarlett";
document.querySelector('#two').querySelector('.scar').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/scarlett.png)";


document.querySelector('#two').querySelector('.fred').querySelector('.pet-name').innerHTML  = "Freddie";
document.querySelector('#two').querySelector('.fred').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/freddie.png)";

} 

else if (document.querySelector('#three').classList.contains('showing')) {

const PETCARD1 = document.querySelector('.pets1');
const PETCARD2 = document.querySelector('.pets2');
const PETCARD3 = document.querySelector('.pets3');
const PETCARD4 = document.querySelector('.pets4');
const PETCARD5 = document.querySelector('.pets5');
const PETCARD6 = document.querySelector('.pets6');
const PETCARD7 = document.querySelector('.pets7');
const PETCARD8 = document.querySelector('.pets8');


PETCARD1.className = `pets1 ${getClass1()}`;
PETCARD2.className = `pets2 ${getClass2()}`;
PETCARD3.className = `pets3 ${getClass3()}`;
PETCARD4.className = `pets4 ${getClass4()}`;
PETCARD5.className = `pets5 ${getClass5()}`;
PETCARD6.className = `pets6 ${getClass6()}`;
PETCARD7.className = `pets7 ${getClass7()}`;
PETCARD8.className = `pets8 ${getClass8()}`;

console.log(document.querySelector('#two').classList.contains('showing'));

document.querySelector('#three').querySelector('.kat').querySelector('.pet-name').innerHTML = "Katrine";
document.querySelector('#three').querySelector('.kat').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/katrine.png)";


document.querySelector('#three').querySelector('.jen').querySelector('.pet-name').innerHTML  = "Jennifer";
document.querySelector('#three').querySelector('.jen').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/jennifer.png)";


document.querySelector('#three').querySelector('.wood').querySelector('.pet-name').innerHTML = "Woody";
document.querySelector('#three').querySelector('.wood').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/woody.png)";


document.querySelector('#three').querySelector('.soph').querySelector('.pet-name').innerHTML  = "Sophia";
document.querySelector('#three').querySelector('.soph').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/sophia.png)";


document.querySelector('#three').querySelector('.tim').querySelector('.pet-name').innerHTML = "Timmy";
document.querySelector('#three').querySelector('.tim').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/timmy.png)";


document.querySelector('#three').querySelector('.char').querySelector('.pet-name').innerHTML  = "Charly";
document.querySelector('#three').querySelector('.char').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/charly.png)";


document.querySelector('#three').querySelector('.scar').querySelector('.pet-name').innerHTML  = "Scarlett";
document.querySelector('#three').querySelector('.scar').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/scarlett.png)";


document.querySelector('#three').querySelector('.fred').querySelector('.pet-name').innerHTML  = "Freddie";
document.querySelector('#three').querySelector('.fred').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/freddie.png)";

}


else if (document.querySelector('#four').classList.contains('showing')) {

const PETCARD1 = document.querySelector('.pets1');
const PETCARD2 = document.querySelector('.pets2');
const PETCARD3 = document.querySelector('.pets3');
const PETCARD4 = document.querySelector('.pets4');
const PETCARD5 = document.querySelector('.pets5');
const PETCARD6 = document.querySelector('.pets6');
const PETCARD7 = document.querySelector('.pets7');
const PETCARD8 = document.querySelector('.pets8');


PETCARD1.className = `pets1 ${getClass1()}`;
PETCARD2.className = `pets2 ${getClass2()}`;
PETCARD3.className = `pets3 ${getClass3()}`;
PETCARD4.className = `pets4 ${getClass4()}`;
PETCARD5.className = `pets5 ${getClass5()}`;
PETCARD6.className = `pets6 ${getClass6()}`;
PETCARD7.className = `pets7 ${getClass7()}`;
PETCARD8.className = `pets8 ${getClass8()}`;

console.log(document.querySelector('#two').classList.contains('showing'));

document.querySelector('#four').querySelector('.kat').querySelector('.pet-name').innerHTML = "Katrine";
document.querySelector('#four').querySelector('.kat').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/katrine.png)";


document.querySelector('#four').querySelector('.jen').querySelector('.pet-name').innerHTML  = "Jennifer";
document.querySelector('#four').querySelector('.jen').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/jennifer.png)";


document.querySelector('#four').querySelector('.wood').querySelector('.pet-name').innerHTML = "Woody";
document.querySelector('#four').querySelector('.wood').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/woody.png)";


document.querySelector('#four').querySelector('.soph').querySelector('.pet-name').innerHTML  = "Sophia";
document.querySelector('#four').querySelector('.soph').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/sophia.png)";


document.querySelector('#four').querySelector('.tim').querySelector('.pet-name').innerHTML = "Timmy";
document.querySelector('#four').querySelector('.tim').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/timmy.png)";


document.querySelector('#four').querySelector('.char').querySelector('.pet-name').innerHTML  = "Charly";
document.querySelector('#four').querySelector('.char').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/charly.png)";


document.querySelector('#four').querySelector('.scar').querySelector('.pet-name').innerHTML  = "Scarlett";
document.querySelector('#four').querySelector('.scar').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/scarlett.png)";


document.querySelector('#four').querySelector('.fred').querySelector('.pet-name').innerHTML  = "Freddie";
document.querySelector('#four').querySelector('.fred').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/freddie.png)";

}


else if (document.querySelector('#five').classList.contains('showing')) {

const PETCARD1 = document.querySelector('.pets1');
const PETCARD2 = document.querySelector('.pets2');
const PETCARD3 = document.querySelector('.pets3');
const PETCARD4 = document.querySelector('.pets4');
const PETCARD5 = document.querySelector('.pets5');
const PETCARD6 = document.querySelector('.pets6');
const PETCARD7 = document.querySelector('.pets7');
const PETCARD8 = document.querySelector('.pets8');


PETCARD1.className = `pets1 ${getClass1()}`;
PETCARD2.className = `pets2 ${getClass2()}`;
PETCARD3.className = `pets3 ${getClass3()}`;
PETCARD4.className = `pets4 ${getClass4()}`;
PETCARD5.className = `pets5 ${getClass5()}`;
PETCARD6.className = `pets6 ${getClass6()}`;
PETCARD7.className = `pets7 ${getClass7()}`;
PETCARD8.className = `pets8 ${getClass8()}`;

console.log(document.querySelector('#two').classList.contains('showing'));

document.querySelector('#five').querySelector('.kat').querySelector('.pet-name').innerHTML = "Katrine";
document.querySelector('#five').querySelector('.kat').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/katrine.png)";


document.querySelector('#five').querySelector('.jen').querySelector('.pet-name').innerHTML  = "Jennifer";
document.querySelector('#five').querySelector('.jen').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/jennifer.png)";


document.querySelector('#five').querySelector('.wood').querySelector('.pet-name').innerHTML = "Woody";
document.querySelector('#five').querySelector('.wood').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/woody.png)";


document.querySelector('#five').querySelector('.soph').querySelector('.pet-name').innerHTML  = "Sophia";
document.querySelector('#five').querySelector('.soph').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/sophia.png)";


document.querySelector('#five').querySelector('.tim').querySelector('.pet-name').innerHTML = "Timmy";
document.querySelector('#five').querySelector('.tim').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/timmy.png)";


document.querySelector('#five').querySelector('.char').querySelector('.pet-name').innerHTML  = "Charly";
document.querySelector('#five').querySelector('.char').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/charly.png)";


document.querySelector('#five').querySelector('.scar').querySelector('.pet-name').innerHTML  = "Scarlett";
document.querySelector('#five').querySelector('.scar').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/scarlett.png)";


document.querySelector('#five').querySelector('.fred').querySelector('.pet-name').innerHTML  = "Freddie";
document.querySelector('#five').querySelector('.fred').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/freddie.png)";

}



else if (document.querySelector('#six').classList.contains('showing')) {

const PETCARD1 = document.querySelector('.pets1');
const PETCARD2 = document.querySelector('.pets2');
const PETCARD3 = document.querySelector('.pets3');
const PETCARD4 = document.querySelector('.pets4');
const PETCARD5 = document.querySelector('.pets5');
const PETCARD6 = document.querySelector('.pets6');
const PETCARD7 = document.querySelector('.pets7');
const PETCARD8 = document.querySelector('.pets8');


PETCARD1.className = `pets1 ${getClass1()}`;
PETCARD2.className = `pets2 ${getClass2()}`;
PETCARD3.className = `pets3 ${getClass3()}`;
PETCARD4.className = `pets4 ${getClass4()}`;
PETCARD5.className = `pets5 ${getClass5()}`;
PETCARD6.className = `pets6 ${getClass6()}`;
PETCARD7.className = `pets7 ${getClass7()}`;
PETCARD8.className = `pets8 ${getClass8()}`;

console.log(document.querySelector('#two').classList.contains('showing'));

document.querySelector('#six').querySelector('.kat').querySelector('.pet-name').innerHTML = "Katrine";
document.querySelector('#six').querySelector('.kat').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/katrine.png)";


document.querySelector('#six').querySelector('.jen').querySelector('.pet-name').innerHTML  = "Jennifer";
document.querySelector('#six').querySelector('.jen').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/jennifer.png)";


document.querySelector('#six').querySelector('.wood').querySelector('.pet-name').innerHTML = "Woody";
document.querySelector('#six').querySelector('.wood').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/woody.png)";


document.querySelector('#six').querySelector('.soph').querySelector('.pet-name').innerHTML  = "Sophia";
document.querySelector('#six').querySelector('.soph').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/sophia.png)";


document.querySelector('#six').querySelector('.tim').querySelector('.pet-name').innerHTML = "Timmy";
document.querySelector('#six').querySelector('.tim').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/timmy.png)";


document.querySelector('#six').querySelector('.char').querySelector('.pet-name').innerHTML  = "Charly";
document.querySelector('#six').querySelector('.char').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/charly.png)";


document.querySelector('#six').querySelector('.scar').querySelector('.pet-name').innerHTML  = "Scarlett";
document.querySelector('#six').querySelector('.scar').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/scarlett.png)";


document.querySelector('#six').querySelector('.fred').querySelector('.pet-name').innerHTML  = "Freddie";
document.querySelector('#six').querySelector('.fred').querySelector('.pets-foto').style.backgroundImage="url(assets/PNG/freddie.png)";

}










const KAT = document.querySelector('.kat');
const JEN = document.querySelector('.jen');
const WOOD = document.querySelector('.wood');
const SOPH = document.querySelector('.soph');
const TIM = document.querySelector('.tim');
const CHAR = document.querySelector('.char');
const SCAR = document.querySelector('.scar');
const FRED = document.querySelector('.fred');







KAT.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Katrine";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.";
MODAL_AGE.innerHTML ="1 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/katrine.png)";
});


JEN.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Jennifer";
MODAL_BREED.innerHTML = "Dog - Labrador";
MODAL_DESCRIPTION.innerHTML = "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.";
MODAL_AGE.innerHTML ="2 months;";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/jennifer.png)";
});

WOOD.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Woody";
MODAL_BREED.innerHTML = "Dog - Golden Retriever";
MODAL_DESCRIPTION.innerHTML = "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.";
MODAL_AGE.innerHTML ="3,5 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/woody.png)";
});

SOPH.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Sophia";
MODAL_BREED.innerHTML = "Dog - Shih tzu";
MODAL_DESCRIPTION.innerHTML = "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.";
MODAL_AGE.innerHTML ="6 months";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/sophia.png)";
});

TIM.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Timmy";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.";
MODAL_AGE.innerHTML ="1,5 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/timmy.png)";
});

CHAR.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Charly";
MODAL_BREED.innerHTML = "Dog - Jack Russell Terrier";
MODAL_DESCRIPTION.innerHTML = "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.";
MODAL_AGE.innerHTML ="3 years;";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/charly.png)";
});

SCAR.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Scarlett";
MODAL_BREED.innerHTML = "Dog - Jack Russell Terrier";
MODAL_DESCRIPTION.innerHTML = "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.";
MODAL_AGE.innerHTML ="7 months";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/scarlett.png)";
});

FRED.addEventListener('click', function(){ 

MODAL_BG.classList.add('active');
MODAL_TITLE.innerHTML = "Freddie";
MODAL_BREED.innerHTML = "Cat - British Shorthair";
MODAL_DESCRIPTION.innerHTML = "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.";
MODAL_AGE.innerHTML ="2 years";
PET_FOTO_MODAL.style.backgroundImage="url(assets/PNG/freddie.png)";
});



document.addEventListener ('click', function(evt) {
  	if(evt.target === MODAL_BG) {

        MODAL_BG.classList.remove('active');
    	}
  	});

	document.addEventListener ('keydown', function(evt) {
  	if(evt.keyCode == 27) {

  	MODAL_BG.classList.remove('active');
   	}
  	});



};







const slideNext = document.querySelector('.next');
slideNext.addEventListener('click', getSlideNext);



const slidePrev = document.querySelector('.prev');
slidePrev.addEventListener('click', getSlidePrev);








