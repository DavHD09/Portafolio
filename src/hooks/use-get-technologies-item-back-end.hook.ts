import NODE_LOGO from "../assets/images/node_logo.png";
import EXPRESS_LOGO from "../assets/images/express_logo.png";
import POSTGRES_LOGO from "../assets/images/postgres_logo.png";
import NEST_LOGO from "../assets/images/next_logo.png";
import MYSQL_LOGO from "../assets/images/mysql_logo.png";
import DOCKER_LOGO from "../assets/images/docker_logo.png";
import SQLSERVER_LOGO from "../assets/images/sqlserver_logo.png"
import { ListTechnologiesItem } from "../models";

interface IGetItemsTechologies {
    ItemsTechnologies: ListTechnologiesItem[];
}

export const useGetTechonologiesItemBackEnd = (): IGetItemsTechologies => {
    const ItemsTechnologies: ListTechnologiesItem[] = [
        {
            img: NODE_LOGO,
            name: "Node js",
        },
        {
            img: EXPRESS_LOGO,
            name: "Express",
        },
        {
            img: POSTGRES_LOGO,
            name: "Postgresql",
        },
        {
            img: NEST_LOGO,
            name: "Nest js",
        },
        {
            img: MYSQL_LOGO,
            name: "Mysql",
        },
        {
            img: DOCKER_LOGO,
            name: "Docker",
        },       
        {
            img: SQLSERVER_LOGO,
            name: "Sql server"
        } 
    ];

    return { ItemsTechnologies };
};
