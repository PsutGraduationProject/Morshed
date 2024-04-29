import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDButton
import ButtonRoot from "./MorshedButtonRoot";

// Material Dashboard 2 React contexts
import { useMorshedUIController } from "../../context";

const Button = forwardRef(
    ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
        const [controller] = useMorshedUIController();
        const { darkMode } = controller;

        return (
            <ButtonRoot
                {...rest}
                ref={ref}
                color="primary"
                variant={variant === "gradient" ? "contained" : variant}
                size={size}
                ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
            >
                {children}
            </ButtonRoot>
        );
    }
);

// Setting default values for the props of MorshedButton
Button.defaultProps = {
    size: "medium",
    variant: "contained",
    color: "white",
    circular: false,
    iconOnly: false,
};

// Typechecking props for the MorshedButton
Button.propTypes = {
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
    color: PropTypes.oneOf([
        "white",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    circular: PropTypes.bool,
    iconOnly: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Button;