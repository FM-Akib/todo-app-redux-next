import React from 'react';
type ContainerProps = {
    children: React.ReactNode;
}
const Container = ({children}: ContainerProps) => {
    return (
        <div className="w-full max-w-7xl  mx-auto px-4  min-h-screen">
           {children} 
        </div>
    );
};

export default Container;