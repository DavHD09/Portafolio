import HTML_LOGO from "../assets/images/html_logo.png";
import CSS_LOGO from "../assets/images/css_logo.png";
import SASS_LOGO from "../assets/images/sass_logo.png";
import JAVASCRIPT_LOGO from "../assets/images/javascript_logo.png";
import BOOTSTRAP_LOGO from "../assets/images/bootstrap.png";
import REACT_LOGO from "../assets/images/react_logo.png";
import FIGMA_LOGO from "../assets/images/figma_logo.png";
import MATERIALUI_LOGO from "../assets/images/materialUi_logo.png";
import { ListTechnologiesItem } from "../models";

interface IGetItemsTechologies {
    ItemsTechnologies: ListTechnologiesItem[];
}

export const useGetTechonologiesItemFrontEnd = (): IGetItemsTechologies => {
    const ItemsTechnologies: ListTechnologiesItem[] = [
        {
            img: HTML_LOGO,
            name: "HTML 5",
        },
        {
            img: CSS_LOGO,
            name: "CSS 3",
        },
        {
            img: SASS_LOGO,
            name: "SASS",
        },
        {
            img: JAVASCRIPT_LOGO,
            name: "JavaScript",
        },
        {
            img: BOOTSTRAP_LOGO,
            name: "Bootstrap",
        },
        {
            img: REACT_LOGO,
            name: "React js",
        },
        {
            img: FIGMA_LOGO,
            name: "Figma"
        },
        {
            img: MATERIALUI_LOGO,
            name: "material ui"
        }
    ];

    return { ItemsTechnologies };
};
