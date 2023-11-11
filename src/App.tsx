import style from "./style.module.scss";

import { MainView, TechnologiesView } from "./components/organisms";
import { ProjectsView } from "./components/organisms/projects-view";

export const App = (): JSX.Element => {
    return (
        <div className={style.background_main}>
            <MainView />
            <TechnologiesView />
            <ProjectsView />
            {/* //TODO -> delete when complete the footer */}
            <footer style={{height: "100px"}}/>
        </div>
    );
};
