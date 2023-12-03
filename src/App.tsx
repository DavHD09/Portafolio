import style from "./style.module.scss";

import {
    MainView,
    TechnologiesView,
    ContactView,
    ProjectsView,
} from "./components/organisms";
import { ButtonNavProvider } from "./context";

export const App = (): JSX.Element => {
    return (
        <div className={style.background_main}>
            <ButtonNavProvider>
                <MainView />
                <TechnologiesView />
                <ProjectsView />
                <ContactView />
                {/* //TODO -> delete when complete the footer */}
                <footer style={{ height: "100px" }} />
            </ButtonNavProvider>
        </div>
    );
};
