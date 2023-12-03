import LINKEDIN_LOGO from "../assets/images/linkedin.png";
import GITLAB_LOG from "../assets/images/gitlab_logo.png";
import GITHUB_LOGO from "../assets/images/github_logo.png";
import { SocialItem } from "../models";

interface IGetSocialItems {
    itemSocialMedia: SocialItem[];
}

export const useGetSocialMedia = (): IGetSocialItems => {
    const itemSocialMedia: SocialItem[] = [
        {
            source: "https://www.linkedin.com/in/davhd/",
            alternative: "Linkedin_logo",
            logo: LINKEDIN_LOGO,
        },
        {
            source: "https://gitlab.com/DavHD",
            alternative: "Gitlab_logo",
            logo: GITLAB_LOG,
        },
        {
            source: "https://github.com/DavHD09",
            alternative: "Github_logo",
            logo: GITHUB_LOGO,
        },
    ];
    return { itemSocialMedia };
};
