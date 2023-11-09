import TYPESCRIPT_LOGO from "../assets/images/typescript_logo.png";
import GIT_LOGO from "../assets/images/git_logo.png";
import GITLAB_LOGO from "../assets/images/gitlab_logo.png";
import GITHUB_LOGO from "../assets/images/github_logo.png";
import { ListTechnologiesItem } from "../models/list-techologies-item.model";

interface IGetItemsTechologies {
    ItemsTechnologies: ListTechnologiesItem[];
}

export const useGetOtherTechnologiesItem = (): IGetItemsTechologies => {
    const ItemsTechnologies: ListTechnologiesItem[] = [
        {
            img: TYPESCRIPT_LOGO,
            name: "Typescript",
        },
        {
            img: GIT_LOGO,
            name: "Git",
        },
        {
            img: GITLAB_LOGO,
            name: "Gitlab",
        },
        {
            img: GITHUB_LOGO,
            name: "Github",
        },
    ];

    return { ItemsTechnologies };
};
