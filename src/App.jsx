import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Landing from "./page/Landing";

import "./app.scss";

const App = () => {
    return (
        <Box className="app">
            <Routes>
                <Route
                    path="*"
                    element={<Landing/>}/>
            </Routes>
        </Box>
    );
};

export default App;