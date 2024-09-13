import { Box, Typography, Grid } from "@mui/material";
import menu from "../data/menu";

const Postres = () => {
    const postres = menu.postres;

    return (
        <Box
            className="postres"
            id="postres">
            <h2 className="title margintop">Postres</h2>
            <Grid
                container
                spacing={1}
                className="pizzas__grid">
                {Object.entries(postres).map(([ name, { precio }]) => (
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

export default Postres;