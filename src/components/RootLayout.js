import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({children}) => {
    return (
        <div>
           <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;