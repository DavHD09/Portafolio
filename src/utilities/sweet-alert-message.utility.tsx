import Swal, { SweetAlertIcon } from "sweetalert2";

interface Props {
    message: string;
    icon: SweetAlertIcon;
}

export const SweetAlertMessage = ({ icon, message }: Props) => {
    Swal.fire({
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 2500,
    });
};
