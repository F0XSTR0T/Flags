import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            <img src="./logo192.png" alt="logo React" />
            {/* le chemin de la balise img se base par rapport à public */}
            <h3>React World</h3>
        </div>

    );
};

export default Logo;