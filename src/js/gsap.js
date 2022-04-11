// register scroll trigger plugin
gsap.registerPlugin(ScrollTrigger);

let loadingTl = gsap.timeline();

// loading timeline
loadingTl
    .fromTo('header', 
        {opacity: 0}, 
        {opacity: 1, duration: 1.5, delay: 5, ease: 'power3.out'}
    )
    .fromTo('.home',
        {opacity: 0},
        {opacity: 1, duration: 2, ease: 'power3.out'},
        "-=1"
    ) 
    .fromTo('.top-content', 
        {opacity: 0, scale: 0}, 
        {opacity: 1, scale: 1, duration: 1.2, ease: "power3.out"},
        "-=1.8"
    )
    .fromTo('.mockup-container', 
        {y:100, opacity: 0}, 
        {y: 0, opacity: 1, duration: 3, ease: 'power3.out'},
        '-=1.2'
    );

//section scroll animations
gsap.fromTo('#portfolio-title',
    {y:300},
    {y:0, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#portfolio-title',
            start: "top bottom"
        }
    }
);

gsap.fromTo('#about-title',
    {y:300},
    {y:0, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#about-title',
            start: "top bottom"
        }
    }
);

gsap.fromTo('#contact-title',
    {y:300},
    {y:0, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#contact-title',
            start: "top bottom"
        }
    }
);

// project scroll animations
gsap.fromTo('#project-caesars',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#project-caesars',
            start: "70% bottom"
        }
    }
);

gsap.fromTo('#project-hgtv',
    {x:300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#project-hgtv',
            start: "70% bottom"
        }
    }
);

gsap.fromTo('#project-relais',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#project-relais',
            start: "70% bottom"
        }
    }
);

gsap.fromTo('#project-cpk',
    {x:300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#project-cpk',
            start: "70% bottom"
        }
    }
);

gsap.fromTo('#bottom-projects-row',
    {x:300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '#bottom-project-row',
            start: "35% center"
        }
    }
);

// about scroll animations
gsap.fromTo('.specialization-container',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.specialization-container',
            start: "center bottom"
        }
    }
);

gsap.fromTo('.skills-container',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.skills-container',
            start: "center bottom"
        }
    }
);

gsap.fromTo('.education-container',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.education-container',
            start: "center bottom"
        }
    }
);

//cto animations
gsap.fromTo('.cto-overlay h2' ,
    {scale: 0, opacity: 0},
    {scale: 1, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.cto-overlay h2',
            start: "bottom bottom"
        }
    }
);

gsap.fromTo('.cto-overlay a' ,
    {opacity: 0},
    {opacity: 1, duration: 1.5, delay: .3, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.cto-overlay a',
            start: "bottom bottom"
        }
    }
);

// contact animations
gsap.fromTo('.contact-left',
    {x:-300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.contact-left',
            start: "70% bottom"
        }
    }
);

gsap.fromTo('.contact-right',
    {x:300, opacity: 0},
    {x:0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger:{
            trigger: '.contact-right',
            start: "70% bottom"
        }
    }
);