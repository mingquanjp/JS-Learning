'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const section1 = document.getElementById('section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.body);
const allSelection = document.querySelectorAll('.section');
console.log(allSelection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button'); // Get all the button with tag button, not the classList
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('test');

message.innerHTML = `We use cookied for improve quantity. 
<button class ="btn">Got it! </button>`;

// header.prepend(message); //In the first line
header.append(message); //In the last line, but the first line has be deleted
// header.append(message.cloneNode(true)); // the message in prepend still appear

// header.before(message);

header.after(message);

//Delete elements
document.querySelector('.btn').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message); //Another way to delete
});

//Styles
message.style.backgroundColor = '#37383d';
message.style.color = 'white';

// console.log(getComputedStyle(message).color);

// //Take the now height of message then plus 40
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// //Set the height of message = 40px;
// message.style.height = "40px" ;

// document.documentElement.style.setProperty('--color-primary', 'orange');

// //Atribute
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); // Get the src of this atribute
// console.log(logo.className);

// logo.alt = "Beautiful Logo";
// console.log(logo.alt);

// //Set the atribute
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

const buttonScrollTo = document.querySelector('.btn--scroll-to');


buttonScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll(X/Y)', window.scrollX, window.scrollY);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY);

  //Scroll with smooth
  // window.scrollTo({
  //   left : s1coords.left,
  //   top : s1coords.top + window.scrollY,
  //   behavior : 'smooth',
  // });

  //Another way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// const navLink = document.querySelectorAll('.nav__link');
// console.log(navLink);
// navLink.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(item);
//     const targetId = item.getAttribute('href'); //#section--1
//     const targetEl = document.querySelector(targetId);

//     targetEl.scrollIntoView({ behavior: 'smooth' });
//   });
// });

//another way - better performance
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const targetID = e.target.getAttribute('href');
    console.log(targetID);
    const targetEl = document.querySelector(targetID);
    targetEl.scrollIntoView({ behavior: 'smooth' });
  }
});

//Solution 1
// const temp= ['1'];

// document.querySelectorAll('.operations__tab').forEach(function(item) {
//   item.addEventListener('click',function(e){
//     e.preventDefault();
//     const data = item.getAttribute('data-tab');
//     console.log(data);
//     temp.push(data);

//  const prev = temp[temp.length -2];
//     const tableContent = document.querySelector(`.operations__content--${data}`);
//     if(data && prev !== data){
//       document.querySelector(`.operations__tab--${prev}`).classList.remove('operations__tab--active');
//       document.querySelector(`.operations__content--${prev}`).classList.remove('operations__content--active');
//       item.classList.add('operations__tab--active');
//       tableContent.classList.add('operations__content--active');
//       console.log(`Condition done`);

//     }
//   });
// });

//Solution 2
// document.querySelectorAll('.operations__tab').forEach(function(item){
//   item.addEventListener('click', function(e){
//     e.preventDefault();
//     const data = item.getAttribute('data-tab');
//     const tabActive = document.querySelector('.operations__tab--active');
//     const contentActive = document.querySelector('.operations__content--active');
//     if (tabActive !== this){
//       tabActive.classList?.remove('operations__tab--active');
//       contentActive.classList?.remove('operations__content--active');

//       this.classList.add('operations__tab--active');
//       document.querySelector(`.operations__content--${data}`).classList.add('operations__content--active');
//     }
//   });
// });

//Solution 3
const tabs = document.querySelectorAll('.operations__tab');
const tableContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tableContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  const data = clicked.getAttribute('data-tab');
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  tabContent.forEach(e => e.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${data}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    console.log(`Link and siblings:`, link, siblings);
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

//Menu fade animation

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticky navigation

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(e){
// console.log(this.window.scrollY);
// if (this.window.scrollY > initialCoords.top){
//   nav.classList.add('sticky');
// }else{
//   nav.classList.remove('sticky');
// }
// });

//Sticky navigation : Intersection Observer API
// const obsCallback = function(entries, observer){
//     entries.forEach(entry => {
//       console.log(entry);
//     });
// };


// const obsOptions = {
//   root : null,
//   threshold : 0.2,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const head = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;



const obsCallBack = function(entries){
  entries.forEach(entry => {
    if (!entry.isIntersecting){ //Out of view
        nav.classList.add('sticky');
    }else{
      nav.classList.remove('sticky');
    }
  });
};

const obsOptions = {
  root : null, //Default
  threshold : 0,
  rootMargin : `-${navHeight}px`, //If the view of element target is < 90% -> no intersecting
};


const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(head);


//Reveal section

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
  console.log(entries);
  entries.forEach(entry => {
  
  if(!entry.isIntersecting) return;
   //if out of view, do nothing, but if in View, remove hidden
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  });

};

const sectionObserver = new IntersectionObserver(revealSection, {
  root : null,
  threshold : 0.12,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
});




// const header = document.getElementById('header');

// const observerOptions = {
//     root: null, // defaults to the viewport
//     threshold: 0 // triggers as soon as any part of the header is out of view
// };

// const observerCallback = (entries) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             // Header is out of view, so make it sticky
//             header.classList.add('sticky');
//         } else {
//             // Header is in view, remove sticky class
//             header.classList.remove('sticky');
//         }
//     });
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(header);






// console.log(tableContent);
// tableContent.forEach(function(item){
//   console.log(item);
// });

// const h1 = document.querySelector('h1');

// //going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);

// h1.firstElementChild.style.color = 'orange';
// h1.lastElementChild.style.color ='red';

// //Going upwards : parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// console.log(h1.closest('.header'));
// h1.closest('.header').style.color = 'green';
// console.log(h1.closest('div'));

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);

// console.log(h1.parentElement.children);
// console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1){
//     el.style.transform = 'scale(0.5)';
//   }
// });

// const randomInt = (min,max) => Math.floor(Math.random() * (max-min+1) + min);
// const randomColor = ()=> {
//   return `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     this.style.backgroundColor = randomColor();

//     //Stop propagation
//     // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// });
// //When normal with no third parameter, it will execute normally with
// //event goes target -> parent -> grandparent

// document.querySelector('.nav__item').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
// }, true);

//With third para = true, we active the capturing
//event goes grandparent -> parent -> target

// const h1 = document.querySelector('h1');

// const h1Alert = function (e) {
//   alert('You good');
//   h1.removeEventListener('mouseenter', h1Alert);
// };

// h1.addEventListener('mouseenter', h1Alert);

// //Delete the event mouseenter after 3s
// setTimeout(() => h1.removeEventListener('mouseenter', h1Alert), 3000);

// h1.onmouseenter = function(e){
//   alert('You bad');
// }
