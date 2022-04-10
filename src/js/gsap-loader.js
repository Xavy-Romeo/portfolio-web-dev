let loaderTl = gsap.timeline();

loaderTl
    .fromTo('.loader-logo',
        {scale: .1, opacity: 0},
        {scale: 1, opacity: 1, rotation: '+=1800', duration: 2, ease: Power4.easeOut}
    )
    .to('.left-loader',
        {x: '100%', yoyo: true, repeat: 1, delay: 1, duration: 1, ease: Power2.easeOut},
        "-=1"
    )
    .to('.right-loader',
        {x: '-100%', yoyo: true, repeat: 1, delay: 1, duration: 1, ease: Power2.easeOut},
        '-=3'
    )
    .fromTo('.pre-loader-container',
        {opacity: 1, overflow: 'hidden'},
        {opacity: 0, overflow: 'initial', duration: 1}
    )
    .fromTo('#main',
        {opacity: 0},
        {opacity: 1, duration: .1}
    );