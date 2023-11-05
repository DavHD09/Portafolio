import styles from "./styles.module.scss";

import { Fragment } from "react";
import { Build, Work, Email } from "@mui/icons-material";

import { ButtomCustom } from "../../atoms";

export const ButtonsNavegation = (): JSX.Element => {
    return (
        <Fragment>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={<Build style={{ height: "20px", width: "20px" }} />}
                    name="Herramientas"
                />
            </div>
            <div className={styles[`container_buttons_nav-works`]}>
                <ButtomCustom
                    icon={<Work style={{ height: "20px", width: "20px" }} />}
                    name="Proyectos "
                />
            </div>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={<Email style={{ height: "20px", width: "20px" }} />}
                    name="Contáctame"
                />
            </div>
        </Fragment>
    );
};
