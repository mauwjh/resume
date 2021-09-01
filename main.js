const toggleDark = function() {
    document.body.classList.toggle('light-theme');
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".topnavmain").style.top = "0";
  } else {
    document.querySelector(".topnavmain").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const toggleMenu = function() {
    document.querySelector('#active').checked = false;
};

const lockScroll = function() {
    document.body.classList.toggle('lock-scroll')
};

const scrollToTop = function () {
    document.querySelector('.aboutmain').scrollIntoView();
};

const scrollToTimeline = function () {
    document.querySelector('.timelinewrapper').scrollIntoView();
};

const scrollToSkills = function () {
    document.querySelector('.skills-section').scrollIntoView();
};

const scrollToPortfolio = function () {
    document.querySelector('.portfoliowrapper').scrollIntoView();
};

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        const bar1 = document.querySelector('.animation-bar-1-span');
        const bar2 = document.querySelector('.animation-bar-2-span');
        const bar3 = document.querySelector('.animation-bar-3-span');
        const bar4 = document.querySelector('.animation-bar-4-span');
        const bar5 = document.querySelector('.animation-bar-5-span');
        const bar6 = document.querySelector('.animation-bar-6-span');
        const bar7 = document.querySelector('.animation-bar-7-span');
        const bar8 = document.querySelector('.animation-bar-8-span');

        if (entry.isIntersecting) {
            bar1.classList.add('bar-animation');
            bar2.classList.add('bar-animation-2');
            bar3.classList.add('bar-animation-3');
            bar4.classList.add('bar-animation-4');
            bar5.classList.add('bar-animation-5');
            bar6.classList.add('bar-animation-6');
            bar7.classList.add('bar-animation-7');
            bar8.classList.add('bar-animation-8');
            return;
        }

        /*bar1.classList.remove('bar-animation');
        bar2.classList.remove('bar-animation-2');
        bar3.classList.remove('bar-animation-3');
        bar4.classList.remove('bar-animation-4');
        bar5.classList.remove('bar-animation-5');  
        bar6.classList.remove('bar-animation-6');
        bar7.classList.remove('bar-animation-7');
        bar8.classList.remove('bar-animation-8');*/
    });
});

observer.observe(document.querySelector('.animation-bar-1'));

const faders = document.querySelectorAll('.fade-in');
const slideIn = document.querySelectorAll('.from-bottom');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

slideIn.forEach(slide => {
    appearOnScroll.observe(slide);
});

const typewriter= new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("coming-soon-animation");
        }
    });
    
});

typewriter.observe(document.querySelector('.coming-soon-span'));