import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeoChart";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Geography = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header title="WORLD MAP" subtitle="Order quantity across the world" />
			<Box
				height="75vh"
				border={`1px solid ${colors.grey[100]}`}
				borderRadius="4px"
			>
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;