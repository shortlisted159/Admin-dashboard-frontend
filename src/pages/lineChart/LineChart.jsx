import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="A line chart to depict the performance of all products across major countries" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;