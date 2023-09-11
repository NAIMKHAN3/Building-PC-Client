import Navbar from "./Navbar";

const RootLayout = ({children}) => {
    return (
        <div>
           <Navbar/>
            <div>
                {children}
            </div>
            <h1>This is Footer</h1>
        </div>
    );
};

export default RootLayout;