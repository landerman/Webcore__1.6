import Swiper, { Navigation, Pagination } from 'swiper';


const modal = document.querySelector('.modal');
const closeBtn1 = document.querySelector('.modal__close-btn1');
const closeBtn2 = document.querySelector('.modal__close-btn2');
const call1 = document.querySelector('.call-btn1');
const feedback1 = document.querySelector('.feedback-btn1');
const call2 = document.querySelector('.call-btn2');
const feedback2 = document.querySelector('.feedback-btn2');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.nav__btn');
const menuExit = document.querySelector('.menu__exit');
const container = document.querySelectorAll('.container');

let goSlider = function(sliderClass, width, elClass ) {

	if (window.innerWidth <= 767 && !sliderClass.classList.contains('swiper-initializited')) {
        let mySwiper;
		return mySwiper = new Swiper(sliderClass, {
            modules: [Navigation, Pagination],
			slidesPerView: 1,
			slideClass: 'swiper-slide',
			spaceBetween: 10,
			pagination: {
				el: elClass,
				type: 'bullets',
				clickable: true,
			},
			width: +width,
			spaceBetween: 16,
		})
	}
}

function blockClick(className) {
    document.addEventListener("click",handler,true);
    function handler(e){
    if(e.target.className!==className)
    e.stopPropagation()
}
}

var btns = document.querySelectorAll(".menu__langs--link");

for (var i = 0; i < btns.length; i++) {

    let variable = btns[i];
    const ruLang = btns[0];
    const enLang = btns[1];
    const chLang = btns[2];

    variable.addEventListener("click", function () {
        if (!variable.classList.contains('active')) {
            if (variable === ruLang) {
                enLang.classList.remove('active')
                chLang.classList.remove('active')
                ruLang.classList.add('active')
            } else if (variable === enLang) {
                ruLang.classList.remove('active')
                chLang.classList.remove('active')
                enLang.classList.add('active')
            } else if (variable === chLang) {
                ruLang.classList.remove('active')
                enLang.classList.remove('active')
                chLang.classList.add('active')
            }
        }
        variable.classList.add('active')
    });
}
const checkboxChange = function (checkboxName,  checkboxText, checkboxWrapper, height) {
    checkboxName.addEventListener('change', function (evt) {
        evt.preventDefault();
        if ( checkboxText.classList.contains('checkbox__read--transform')) {
             checkboxText.classList.remove('checkbox__read--transform');
            checkboxText.innerHTML = 'Показать все';
            checkboxWrapper.style = `height: ${height}px`
        } else {
             checkboxText.classList.add('checkbox__read--transform');
            checkboxText.innerHTML = 'Скрыть'

            checkboxWrapper.style = 'height: fit-content'
        }
    })

}

const sliderServices = document.querySelector('.tehnic-services__swiper');

goSlider(sliderServices, 240, '.tehnic-services__pagination')


let tehnicServicesCheckbox = document.querySelector('.tehnic-services__checkbox');
let tehnicServicesWrapper = document.querySelector('.tehnic-services__wrapper')
let tehnicServicesCheckboxText = document.querySelector('.tehnic-services__checkbox--read');

checkboxChange(tehnicServicesCheckbox, tehnicServicesCheckboxText,tehnicServicesWrapper, 160)

const checkboxMain = document.querySelector('.main-page__checkbox');
const checkboxTextMain = document.querySelector('.main-page__checkbox--read');
const contentText = document.querySelector('.main-page__content-text');

checkboxChange(checkboxMain, checkboxTextMain,  contentText, 139)

const sliderBrands = document.querySelector('.swiper-brand__container');

goSlider(sliderBrands, 240, '.brand__pagination')


let checkboxBrands = document.querySelector('.brands__checkbox');
let CheckboxTextBrands = document.querySelector('.brands__checkbox--read');
let wrapperBrands = document.querySelector('.swiper-brand__wrapper');

checkboxChange(checkboxBrands, CheckboxTextBrands, wrapperBrands, 160);

const sliderPrice = document.querySelector('.price__container');
goSlider(sliderPrice, 260, '.price__pagination')

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const widthW7 = window.innerWidth;

if (widthW7 >= 1440){
    menu.style = `height:${scrollHeight}px`
      
}
burger.addEventListener('click', function (evt) {
    if (menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open');
        for (let i = 0; i < container.length; i++) { // 
            container.classList.remove('container--filter'); // 
        }
        container
    } else {
        menu.classList.add('menu--open');
        for (let i = 0; i < container.length; i++) {
            let cont = container[i];
            cont.classList.add('container--filter')
        }
    }
});
menuExit.addEventListener('click', function (evt) {
    menu.classList.remove('menu--open');
    for (let i = 0; i < container.length; i++) { // 
        let cont = container[i];
        cont.classList.remove('container--filter');
    }
})


let filterAll = function(){
    if(!modal.classList.contains('modal--remove')){
       menu.classList.add('menu--filter');
       for(let i = 0; i < container.length; i++){
           let cont = container[i]; 
           cont.classList.add('container--filter');
       }
      
       
   }else{
       menu.classList.remove('menu--filter');
       for(let i = 0; i < container.length; i++){
           let cont = container[i]; 
           cont.classList.remove('container--filter');
       }
       
   }   
   }

let clickCall = function(){
   
        if (modal.classList.contains('modal--remove')) {
            modal.classList.remove('modal--remove')
        }
        if (modal.classList.contains('modal--call-remove')) {
            modal.classList.remove('modal--call-remove')
        }
       
        modal.classList.remove('modal--remove');
        modal.classList.add('modal--feedback-remove');
        filterAll()
    }

call1.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickCall()
})

call2.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickCall();
    
})

const clickFeedback = function(){
    if (modal.classList.contains('modal--remove')) {
        modal.classList.remove('modal--remove')
    }
    if (modal.classList.contains('modal--feedback-remove')) {
        modal.classList.remove('modal--feedback-remove')
    }
  
    modal.classList.remove('modal--remove');
    modal.classList.add('modal--call-remove');
    filterAll()
}

feedback1.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickFeedback()
})

feedback2.addEventListener('click', function (evt) {
    evt.preventDefault();
    clickFeedback()
})



closeBtn1.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--remove');
    filterAll()

})


closeBtn2.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--remove');
    filterAll()

})

const page = document.querySelector(".page");
const body = document.querySelector("body");

function closeOverlay() {

    document.addEventListener('click', (e) => {
        
        const clickMOdal = e.composedPath().includes(modal);
        const clickCall1 = e.composedPath().includes(call1);
        const clickFeedback1 = e.composedPath().includes(feedback1);
        const clickCall2 = e.composedPath().includes(call2);
        const clickFeedback2 = e.composedPath().includes(feedback2);
        const clickBurger = e.composedPath().includes(burger);
        const clickMenu = e.composedPath().includes(menu);
    
        if (!modal.classList.contains('modal--remove') && !clickMOdal && !clickCall1 && !clickFeedback1 && !clickCall2 && !clickFeedback2) {
    
            modal.classList.add('modal--remove');
            filterAll();
           
            
        }else if (menu.classList.contains('menu--open') && !clickBurger && !clickMenu) {
            menu.classList.remove('menu--open');
            for (let i = 0; i < container.length; i++) { // 
                let cont = container[i];
    
                cont.classList.remove('container--filter')
            }
        }
    
       if(!modal.classList.contains('modal--remove')){
            menu.classList.remove('menu--open');
        }
    
        if (menu.classList.contains('menu--open') || !modal.classList.contains('modal--remove')) {
          page.classList.add('page--overlay-open')
          page.classList.remove('page--overlay-close')
        }else{
            page.classList.add('page--overlay-close')
            page.classList.remove('page--overlay-open')
            
        }
        
        
    })
    
    
    }
    
    closeOverlay()
    