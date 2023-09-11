const RootLayout = ({children}) => {
    return (
        <div>
            <h1>This is navbar</h1>
            <div>
                {children}
            </div>
            <h1>This is Footer</h1>
        </div>
    );
};

export default RootLayout;