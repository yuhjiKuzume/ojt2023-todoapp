import React, { useState } from "react";
import { FunctionList } from "./FunctionList";
import { FunctionScreen } from "./FunctionScreen";
import { useCallback } from "react";

export const InitialScreen = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const handleMenuOpen = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

    return (
        <div className="container w-screen">
            <div className="flex layout_screen">
                <FunctionList open={openMenu} handleClick={handleMenuOpen} />
                <FunctionScreen open={openMenu} />
            </div>
        </div>
    );
};
