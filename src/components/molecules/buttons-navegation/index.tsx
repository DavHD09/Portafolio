import styles from "./styles.module.scss";

import { Fragment } from "react";
import { Build, Work, Email } from "@mui/icons-material";

import { ButtomCustom } from "../../atoms";
import { useGoToContainerRef } from "../../../hooks";

export const ButtonsNavegation = (): JSX.Element => {
    const { goToContainerRef } = useGoToContainerRef();
    return (
        <Fragment>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={
                        <Build className={styles.container_buttons_nav_icons} />
                    }
                    name="Tecnólogias"
                    onClick={goToContainerRef}
                />
            </div>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={
                        <Work className={styles.container_buttons_nav_icons} />
                    }
                    name="Proyectos"
                    onClick={goToContainerRef}
                />
            </div>
            <div className={styles.container_buttons_nav}>
                <ButtomCustom
                    icon={
                        <Email className={styles.container_buttons_nav_icons} />
                    }
                    name="Contáctame"
                    onClick={goToContainerRef}
                />
            </div>
        </Fragment>
    );
};
