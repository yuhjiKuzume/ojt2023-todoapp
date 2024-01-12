import React, { useState } from "react";
import { Header } from "./Header";
import { FunctionList } from "./FunctionList";
import { FunctionScreen } from "./FunctionScreen";
import { useCallback } from "react";

export const InitialScreen = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const handleMenuOpen = useCallback(() => {
        setOpenMenu(!openMenu);
    }, [openMenu]);

    return (
        <div>
            <div className="w-full">
                <Header />
            </div>
            <div className="flex layout_screen">
                <FunctionList open={openMenu} handleClick={handleMenuOpen} />
                <FunctionScreen open={openMenu} />
            </div>
        </div>
    );
};
