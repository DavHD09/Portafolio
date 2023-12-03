import { RefObject, createContext, createRef, useContext, useRef } from "react";

interface Props {
    children: JSX.Element | JSX.Element[];
}

interface ButtonResetContext {
    btnTechnologyRef: RefObject<HTMLDivElement>;
    btnProjectRef: RefObject<HTMLDivElement>;
    btnContactRef: RefObject<HTMLDivElement>;
}

export const ButtonNavContext = createContext<ButtonResetContext>({
    btnTechnologyRef: createRef<HTMLDivElement>(),
    btnProjectRef: createRef<HTMLDivElement>(),
    btnContactRef: createRef<HTMLDivElement>(),
});

export const ButtonNavProvider = ({ children }: Props) => {
    const btnTechnologyRef = useRef<HTMLDivElement>(null);
    const btnProjectRef = useRef<HTMLDivElement>(null);
    const btnContactRef = useRef<HTMLDivElement>(null);

    return (
        <ButtonNavContext.Provider
            value={{
                btnTechnologyRef,
                btnProjectRef,
                btnContactRef,
            }}
        >
            {children}
        </ButtonNavContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useButtonNavContext = () => {
    const context = useContext(ButtonNavContext);
    if (context === undefined) {
        throw new Error(
            "ButtonNavContext must be used within a ButtonNavProvider"
        );
    }
    return context;
};
