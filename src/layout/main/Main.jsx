import { Box } from "@mui/material";

import "./main.scss";

import Empanadas from "../../components/Empanadas";
import Pizzas from "../../components/Pizzas";
import Calzone from "../../components/Calzone";
import Tartas from "../../components/Tartas";
import Fainas from "../../components/Fainas";
import Bebidas from "../../components/Bebidas";
import Postres from "../../components/Postres";
import Promos from "../../components/Promos";
import TopButton from "../../components/topButton";

const Main = () => {
    return (
        <Box
            component="main"
            className="main container">
            <Empanadas/>
            <br/>
            <Pizzas/>
            <br/>
            <Calzone/>
            <br/>
            <Tartas/>
            <br/>
            <Fainas/>
            <br/>
            <Bebidas/>
            <br/>
            <Postres/>
            <br/>
            <Promos/>
            <TopButton/>
        </Box>
    );
};

export default Main;