import { Box } from "@mui/material";
import menu from "../data/menu";

const Empanadas = () => {
    return (
        <Box
            className="empanadas"
            id="empanadas">
            <h2 className="title margintop">Empanadas</h2>
            <h3 className="subtitle"> ${menu.empanadas.valor} c/u</h3>

            <h3 className="subtitle margintop">Tradicionales</h3>
            <ul>
                {menu.empanadas.tradicionales.map((gusto, index) => (
                    <li key={index}>{gusto}</li>
                ))}
            </ul>

            <h3 className="subtitle margintop">Canastitas</h3>
            <ul>
                {menu.empanadas.canastitas.map((gusto, index) => (
                    <li key={index}>{gusto}</li>
                ))}
            </ul>
        </Box>
    );
};

export default Empanadas;