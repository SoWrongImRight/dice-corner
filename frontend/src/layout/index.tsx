import React, { useState, Suspense } from 'react';

// Import hooks
import { useWindowSize } from "../hooks/useWindowSize";

// Import types
import WindowType from "../types/windowType";

// Import Layout components
import Header from './Header';
import Navbar from './Navbar';
import SideNavV2 from './SideNavV2';
import SideInfo from './SideInfo';
import Footer from './Footer';

import StyledLayout from './Layout.styles';

// Lazy load
const Banner = React.lazy(() => import('./Banner'));
const ScrollToTop = React.lazy(() => import('../components/ScrollToTop'));

const Layout: React.FC = ({children}) => {
    const [isBanner, setIsBanner] = useState(false);
    
    const windowSize: WindowType = useWindowSize();

    return ( 
        <StyledLayout>
            <Suspense fallback={null}>
                {isBanner && <Banner />}
                <Header />
                {windowSize.width! < 680 ? <Navbar /> : <SideNavV2 />}
                {windowSize.width! > 680 && <SideInfo />}
                <main>
                    <div className="backgroundShading" >
                        {children}
                    </div>
                </main>
                <ScrollToTop />
                <Footer />
            </Suspense>
        </StyledLayout>
     );
}

export default Layout;