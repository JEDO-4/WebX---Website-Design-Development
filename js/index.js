const cover = document.querySelector('.cover');
const menu = document.querySelector('.menu');
const btnMenu = document.querySelector('.btnMenu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('active');
    cover.classList.add('active');
});

cover.addEventListener('click', () => {
    menu.classList.remove('active');
    cover.classList.remove('active');
});
const sections = [
    {
        selectors: ['.aboutanimation']
    },
    {
        selectors: ['.servicesanimation']
    },
    {
        selectors: ['.portfolioanimation']
    },
    {
        selectors: ['.testimonialsanimation']
    },
    {
        selectors: ['.contactanimation']
    }
];

window.addEventListener('scroll', () => {
    const scrollY = window.innerHeight;
    //console.log(scrollY);
    sections.forEach(section => {
        // if (scrollY >= section.range.min && scrollY <= section.range.max) {
        // }
        section.selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach((el) =>{ 
                if(el.getBoundingClientRect().top< scrollY - 100)
                el.classList.add('active')
                el.style.transitionDelay=el.dataset.transition
                
            });
        });
    });
});
