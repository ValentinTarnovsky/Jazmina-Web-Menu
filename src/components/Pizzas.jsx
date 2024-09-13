import { Box, Typography, Grid } from "@mui/material";
import menu from "../data/menu";

const Pizzas = () => {
    const pizzaEntries = Object.entries(menu.pizzas);

    return (
        <Box
            className="pizzas"
            id="pizzas">
            <h2 className="title margintop">Pizzas</h2>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {pizzaEntries.map(([ name, prices ]) => (
                    <Grid
                        item
                        xs={12}
                        key={name}
                        className="pizzas__item">
                        <Box className="pizzas__box">
                            <Typography
                                variant="h5"
                                className="pizzas__name"
                                style={{ fontWeight: "bold" }}>
                                • {name}
                            </Typography>

                            <Typography
                                variant="body1"
                                className="pizzas__prices">
                                {prices.chica ? `Chica: $${prices.chica} | ` : "Chica: - | "}
                                {prices.grande ? `Grande: $${prices.grande}` : "Grande: - | "}
                                {prices.barrilete ? ` | Barrilete: $${prices.barrilete}` : ""}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Pizzas;