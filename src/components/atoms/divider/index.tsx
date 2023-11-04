import style from './styles.module.scss'

import { Divider } from "@mui/material";
import { DividerProps } from "@mui/material/Divider";

interface Props extends DividerProps {}

export const DividerCustom = (Props: Props): JSX.Element => {
    return <Divider {...Props} className={style.container}/>;
};
