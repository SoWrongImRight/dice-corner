import React, { useState } from 'react';

import { ImArrowUp2 } from 'react-icons/im';

import StyledScrollToTop from './ScrollToTop.styles';

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300){
            setVisible(false);
        }

        
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <StyledScrollToTop>
            <ImArrowUp2 onClick={scrollToTop}
                style={{display: visible ? 'inline' : 'none'}} />
        </StyledScrollToTop>
    )
}

export default ScrollToTop;