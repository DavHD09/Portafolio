import style from "./style.module.scss";

import { MainView, TechnologiesView } from "./components/organisms";

export const App = (): JSX.Element => {
    return (
        <div className={style.background_main}>
            <MainView />
            <TechnologiesView />
            {/* //TODO -> delete when complete the footer */}
            <footer style={{height: "100px"}}/>
        </div>
    );
};
