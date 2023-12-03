import { SyntheticEvent } from "react";

import { useButtonNavContext } from "../context";

interface IGetFunction {
    goToContainerRef: (event: SyntheticEvent) => void;
}

export const useGoToContainerRef = (): IGetFunction => {
    const { btnContactRef, btnProjectRef, btnTechnologyRef } =
        useButtonNavContext();

    const goToContainerRef = (event: SyntheticEvent): void => {
        const { name } = event.target as HTMLInputElement;

        if (btnProjectRef.current && name === "Proyectos") {
            btnProjectRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (btnTechnologyRef.current && name === "Tecnólogias") {
            btnTechnologyRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (btnContactRef.current && name === "Contáctame") {
            btnContactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return { goToContainerRef };
};
