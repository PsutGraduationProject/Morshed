import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
// import {Route, Router, Routes} from "react-router-dom";
import './App.css';
import Breadcrumbs from "./components/Breadcrumps";
import MorshedBox from "./components/MorshedBox";
import AppBar from "@mui/material/AppBar";
import {Toolbar} from "@mui/material";
import Cookies from 'js-cookie';
import theme from "./assets/theme";

// import MorshedButton from "../src/components/MorshedButton";
import {MorshedUIControllerProvider} from "./context";
// import MorshedButton from "@mui/material/MorshedButton";
import {ThemeProvider} from "@mui/material/styles";

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/', cache: new InMemoryCache(), credentials: 'same-origin', headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
    }
})

const navbarRow = ({breakpoints}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    [breakpoints.up("md")]: {
        justifyContent: "stretch",
        width: "max-content",
    },

    [breakpoints.up("xl")]: {
        justifyContent: "stretch !important",
        width: "max-content !important",
    },
});

const navbarContainer = ({breakpoints}) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    pt: 0.5,
    pb: 0.5,

    [breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "0",
        paddingBottom: "0",
    },
});

function navbar(theme, ownerState) {
    const {palette, boxShadows, functions, transitions, breakpoints, borders} = theme;
    const {transparentNavbar, absolute, light, darkMode} = ownerState;

    const {dark, white, text, transparent, background} = palette;
    const {navbarBoxShadow} = boxShadows;
    const {rgba, pxToRem} = functions;
    const {borderRadius} = borders;

    return {
        boxShadow: transparentNavbar || absolute ? "none" : navbarBoxShadow,
        backdropFilter: transparentNavbar || absolute ? "none" : `saturate(200%) blur(${pxToRem(30)})`,
        backgroundColor:
            transparentNavbar || absolute
                ? `${transparent.main} !important`
                : rgba(darkMode ? background.default : white.main, 0.8),

        color: () => {
            let color;

            if (light) {
                color = white.main;
            } else if (transparentNavbar) {
                color = text.main;
            } else {
                color = dark.main;
            }

            return color;
        },
        top: absolute ? 0 : pxToRem(12),
        minHeight: pxToRem(75),
        display: "grid",
        alignItems: "center",
        borderRadius: borderRadius.xl,
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(8),
        paddingRight: absolute ? pxToRem(8) : 0,
        paddingLeft: absolute ? pxToRem(16) : 0,

        "& > *": {
            transition: transitions.create("all", {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
            }),
        },

        "& .MuiToolbar-root": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            [breakpoints.up("sm")]: {
                minHeight: "auto",
                padding: `${pxToRem(4)} ${pxToRem(16)}`,
            },
        },
    };
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <MorshedBox color="inherit" mb={{xs: 1, md: 0}} sx={(theme) => navbarRow(theme)}>
                    <Breadcrumbs icon="mac" title={"test"} light={true}/>
                </MorshedBox>
            </div>
        </ThemeProvider>
        // <ApolloProvider client={client}>
        //     <div className="App">
        //         <div className="container">
        //             <Breadcrumbs icon="home" title="Test" route="test" light={true} />
        //         </div>
        //         {/*<Routes>*/}
        //         {/*    <Route path={'/add/user'} element={<CreateUser/>}/>*/}
        //         {/*    <Route path={'/users-info'} element={<UserInfo/>}/>*/}
        //         {/*</Routes>*/}
        //     </div>
        // </ApolloProvider>
    );
}

