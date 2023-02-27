import React, { useState, useRef, useEffect } from 'react';

export const MenuButton = ({ buttonText, menuComponent }) =>
{
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() =>
    {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div>
            <button onClick={() => setShowMenu(!showMenu)}>{buttonText}</button>
            {showMenu && (
                <div ref={menuRef}>
                    {menuComponent}
                </div>
            )}
        </div>
    );
};