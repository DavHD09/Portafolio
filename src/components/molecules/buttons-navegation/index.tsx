import styles from "./styles.module.scss";

import { Fragment } from "react";
import { Build, Work, Email } from "@mui/icons-material";

import { ButtomCustom } from "../../atoms";

export const ButtonsNavegation = (): JSX.Element => {
    return (
        <Fragment>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={
                        <Build className={styles.container_buttons_nav_icons} />
                    }
                    name=" Tecnólogias"
                />
            </div>
            <div className={styles[`container_buttons_nav`]}>
                <ButtomCustom
                    icon={
                        <Work className={styles.container_buttons_nav_icons} />
                    }
                    name="Proyectos"
                />
            </div>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={
                        <Email className={styles.container_buttons_nav_icons} />
                    }
                    name="Contáctame"
                />
            </div>
        </Fragment>
    );
};
