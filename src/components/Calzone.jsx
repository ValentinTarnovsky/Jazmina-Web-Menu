import { Box, Typography, Grid } from "@mui/material";
import menu from "../data/menu";

const Calzone = () => {
    const calzones = menu.calzones;

    return (
        <Box
            className="calzone"
            id="calzones">
            <h2 className="title margintop">Calzones</h2>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {Object.entries(calzones).map(([ name, { desc, precio }]) => (
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
                                className="calzone-description">
                                {desc}
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

export default Calzone;