import style from "./style.module.scss";

import { MainView } from "./components/organisms";

export const App = (): JSX.Element => {
    return (
        <div className={style.background_main}>
            <MainView />
        </div>
    );
};
