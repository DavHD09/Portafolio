import styles from "./styles.module.scss";

import { Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
    name: string;
    icon: JSX.Element;
}

export const ButtomCustom = (Props: Props): JSX.Element => {
    return (
        <Button
            variant="contained"
            startIcon={Props.icon}
            className={styles.container_button}
            {...Props}
        >
            {Props.name}
        </Button>
    );
};
