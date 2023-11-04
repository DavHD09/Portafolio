import style from "./styles.module.scss";

import davHDPhoto from "../../../assets/images/Logo_DavHD.png";

export const ContainerPhoto = (): JSX.Element => {
    return (
        <div className={style.container}>
            <img
                alt="DavHD_photo"
                src={davHDPhoto}
                className={style.container_photo}
            />
        </div>
    );
};
