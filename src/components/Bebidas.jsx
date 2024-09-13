import { Box, Typography, Grid } from "@mui/material";
import menu from "../data/menu";

const Bebidas = () => {
    const bebidas = menu.bebidas;

    return (
        <Box
            className="tartas"
            id="tartas">
            <h2 className="title margintop">Bebidas</h2>
            <h3 className="subtitle margintop">Gaseosas</h3>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {Object.entries(bebidas.gaseosas).map(([ name, { precio }]) => (
                    <Grid
                        item
                        xs={12}
                        key={name}
                        className="pizzas__item">
                        <Box
                            key={name}
                            className="calzone-item">
                            <Typography
                                variant="h5"
                                className="calzone-title"
                                style={{ fontWeight: "bold" }}>
                                • {name}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="calzone-price">
                                ${precio}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <h3 className="subtitle margintop">Cervezas</h3>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {Object.entries(bebidas.cerveza).map(([ name, { precio }]) => (
                    <Grid
                        item
                        xs={12}
                        key={name}
                        className="pizzas__item">
                        <Box
                            key={name}
                            className="calzone-item">
                            <Typography
                                variant="h5"
                                className="calzone-title"
                                style={{ fontWeight: "bold" }}>
                                • {name}
                            </Typography>
                            <Typography
                                variant="body1"
                                className="calzone-price">
                                ${precio}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Bebidas;