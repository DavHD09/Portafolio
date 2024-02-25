import style from "./style.module.scss";

import {
    MainView,
    TechnologiesView,
    ContactView,
    ProjectsView,
} from "./components/organisms";
import { ButtonNavProvider } from "./context";
import { Footer } from "./components/atoms/footer";

export const App = (): JSX.Element => {
    return (
        <div className={style.background_main}>
            <ButtonNavProvider>
                <MainView />
                <TechnologiesView />
                <ProjectsView />
                <ContactView />
                <Footer/>
            </ButtonNavProvider>
        </div>
    );
};
