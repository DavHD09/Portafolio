import styles from "./styles.module.scss";

import { Fragment } from "react";

import { useGetSocialMedia } from "../../../hooks/use-get-social-medias-item.hook";
import CONTACT_IMG from "../../../assets/images/contact_image.png";
import { SocialItem } from "../../../models";

export const SocialMedia = (): JSX.Element => {
    const { itemSocialMedia } = useGetSocialMedia();
    return (
        <Fragment>
            <section>
                <img
                    alt="contact_imgae"
                    src={CONTACT_IMG}
                    className={styles.img}
                />
            </section>
            <section className={styles.container_social}>
                {itemSocialMedia.map(
                    ({ alternative, logo, source }: SocialItem) => (
                        <a href={source} target="blank" key={source}>
                            <img
                                alt={alternative}
                                src={logo}
                                className={styles.container_social_logos}
                            />
                        </a>
                    )
                )}
            </section>
        </Fragment>
    );
};
