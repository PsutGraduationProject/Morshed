import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MDTypography
import MorshedTypographyRoot from "../MorshedTypography/MorshedTypographyRoot";

// Material Dashboard 2 React contexts
import { useMorshedUIController } from "../../context";

const MorshedTypography = forwardRef(
    (
        { color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest },
        ref
    ) => {
        const [controller] = useMorshedUIController();
        const { darkMode } = controller;

        return (
            <MorshedTypographyRoot
                {...rest}
                ref={ref}
                ownerState={{
                    color,
                    textTransform,
                    verticalAlign,
                    fontWeight,
                    opacity,
                    textGradient,
                    darkMode,
                }}
            >
                {children}
            </MorshedTypographyRoot>
        );
    }
);

// Setting default values for the props of MorshedTypography
MorshedTypography.defaultProps = {
    color: "dark",
    fontWeight: false,
    textTransform: "none",
    verticalAlign: "unset",
    textGradient: false,
    opacity: 1,
};

// Typechecking props for the MorshedTypography
MorshedTypography.propTypes = {
    color: PropTypes.oneOf([
        "inherit",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "text",
        "white",
    ]),
    fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
    textTransform: PropTypes.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
    verticalAlign: PropTypes.oneOf([
        "unset",
        "baseline",
        "sub",
        "super",
        "text-top",
        "text-bottom",
        "middle",
        "top",
        "bottom",
    ]),
    textGradient: PropTypes.bool,
    children: PropTypes.node.isRequired,
    opacity: PropTypes.number,
};

export default MorshedTypography;