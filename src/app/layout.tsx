import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div>
                    <header style={{
                        backgroundColor: '#333333',
                        padding: '30px',
                        border: 'none'
                    }}>
                        <h1 style={{ color: 'white', margin: 0 }}>PokeCoreX</h1>
                    </header>
                    <main style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
};

export default Layout;
