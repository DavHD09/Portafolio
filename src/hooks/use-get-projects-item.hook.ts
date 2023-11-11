import { CardItem } from "../models/projects-item.model";
import NEW_BALANCE from "../assets/images/new-balance.png";
import TN_BARBERSHOP from "../assets/images/tn-barbershop.png";
import SERVICE_SCALE from "../assets/images/basculas-servicios.png";

import HTML_LOGO from "../assets/images/html_logo.png";
import CSS_LOGO from "../assets/images/css_logo.png";
import MYSQL_LOGO from "../assets/images/mysql_logo.png";
import JAVASCRIPT_LOGO from "../assets/images/javascript_logo.png";
import FLASK_LOGO from "../assets/images/Flask_Logo.png";
import REACT_LOGO from "../assets/images/react_logo.png";
import EXPRESS_LOGO from "../assets/images/express_logo.png";
import NODE_LOGO from "../assets/images/node_logo.png";

interface IGetProjectsItems {
    projectsItems: CardItem[];
}

export const useGetProjectsItems = (): IGetProjectsItems => {
    const projectsItems: CardItem[] = [
        {
            route: NEW_BALANCE,
            title: "Ecommerce newBalance",
            description:
                "Portal web educativo para realizar compras de productos new-balance",
            tags: [
                { img: HTML_LOGO, name: "HTML 5" },
                { img: CSS_LOGO, name: "CSS 3" },
                { img: MYSQL_LOGO, name: "MySql" },
                { img: JAVASCRIPT_LOGO, name: "Javascript" },
                { img: FLASK_LOGO, name: "Flask" },
            ],
        },
        {
            route: TN_BARBERSHOP,
            title: "Tn barber-shop",
            description:
                "Portal web educativo para realizar compras de barbería y asignación de citas para clientes",
            tags: [
                { img: HTML_LOGO, name: "HTML 5" },
                { img: REACT_LOGO, name: "React js" },
                { img: CSS_LOGO, name: "Css 3" },
                { img: JAVASCRIPT_LOGO, name: "Javascript" },
                { img: EXPRESS_LOGO, name: "Express" },
                { img: NODE_LOGO, name: "Node js"}
            ],
        },
        {
            route: SERVICE_SCALE,
            title: "Basculas y servicios",
            description:
                "Muestra de productos para la venta y visualización de su imagen personal",
            tags: [
                { img: HTML_LOGO, name: "HTML 5" },
                { img: CSS_LOGO, name: "CSS 3" },
                { img: JAVASCRIPT_LOGO, name: "Javascript" },
            ],
        },
    ];

    return { projectsItems };
};
