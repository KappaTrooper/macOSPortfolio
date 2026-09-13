import useWindowStore from '#store/window'
import useIsMobile from '#hooks/useIsMobile'
import { useGSAP } from '@gsap/react';
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';

const WindowWrapper = (Component,windowKey) => {
 const Wrapped = (props) => {
    const { focusWindow, windows, } = useWindowStore();
    const { isOpen, zIndex} = windows[windowKey];
    const ref = useRef(null);
    const isMobile = useIsMobile();

    useGSAP(() => {

        const el = ref.current;
        if(!el || !isOpen) return;

        el.style.display = 'block';

        if (isMobile) {
            gsap.fromTo(el, { y: '100%', opacity: 1 },
                { y: '0%', duration: 0.35, ease: "power3.out" },
            );
        } else {
            gsap.fromTo(el, {scale: 0.8, opacity:0, y: 40},
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            );
        }


    }, [isOpen, isMobile]);


    useGSAP(() => {

        const el = ref.current;
        if(!el || isMobile) return; // skip Draggable entirely on mobile

        const [instance] = Draggable.create(el, { bounds: window, onPress: () => focusWindow(windowKey)})

        const handleResize = () => instance.applyBounds(window);
        window.addEventListener('resize', handleResize);

        return() => {
            window.removeEventListener('resize', handleResize);
            instance.kill();
        };

    }, [isMobile]);



    useLayoutEffect(() => {
      const el = ref.current;
      if(!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen])

    return <section id={windowKey} ref={ref} style={{ zIndex }} className='absolute window-shell'>

    <Component {...props} />



    </section>
 };

 Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`
 
    return Wrapped;
}

export default WindowWrapper