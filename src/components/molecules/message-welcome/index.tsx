import styles from "./styles.module.scss";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import { ButtomCustom, DividerCustom } from "../../atoms";
import DavHD_CV from "../../../assets/documents/davhd.pdf";

export const MessageWelcome = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <section>
                <h1 className={styles.container_title}>
                    Hola! Soy David Hernández
                </h1>
                <h1 className={styles[`container_title-blue`]}>
                    Programador web full-stack
                </h1>
            </section>
            <DividerCustom />
            <section>
                <p className={styles.container_subtitle}>
                    <b>Ingenierio Electrónico / Desarrollador web full-stack</b>
                    , con conocimientos solidos en creación de aplicativos web,
                    con más de 2 años de experiencia.
                </p>
            </section>
            <section>
                <a href={DavHD_CV} download={"DavHD_CV.pdf"}>
                    <ButtomCustom
                        icon={<CloudDownloadIcon />}
                        name="Descargar CV"
                    />
                </a>
            </section>
        </div>
    );
};
