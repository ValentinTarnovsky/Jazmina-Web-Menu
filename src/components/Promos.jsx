import { Box, Typography, Grid } from "@mui/material";
import menu from "../data/menu";

const Promos = () => {
    const promos = menu.promos;

    return (
        <Box
            className="promos"
            id="promos">
            <h2 className="title margintop">Promos</h2>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {Object.entries(promos).map(([ name, promo ]) => (
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

                            {Object.keys(promo)
                                .filter((key) => key.startsWith("desc"))
                                .map((descKey) => (
                                    <Typography
                                        key={descKey}
                                        variant="h6"
                                        className="calzone-description">
                                        {promo[descKey]}
                                    </Typography>
                                ))}

                            <Typography
                                variant="h5"
                                className="calzone-price">
                                ${promo.precio}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Promos;