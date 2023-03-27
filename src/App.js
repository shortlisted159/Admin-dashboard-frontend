import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from './globalComp/TopBar';
import Sidebar from './globalComp/Sidebar';
import  Dashboard  from './pages/dashboard/dashboard.jsx';
import Team from "./pages/team/team.jsx";
import Invoices from "./pages/invoices/invoices.jsx";
import Contacts from "./pages/contacts/contacts.jsx";
import Bar from "./pages/barChart/BarChart.jsx";
import Form from "./pages/form/form.jsx";
import Line from "./pages/lineChart/LineChart.jsx";
import Pie from "./pages/pieChart/PieChart.jsx";
import FAQ from "./pages/faq/faq.jsx";
import Geography from "./pages/GeoChart/GeoChart.jsx";
import Calendar from "./pages/calendar/calendar.jsx";



function App() {

  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {/* cssbaseline resets all the css to default and saves us quite some time */}
    <div className="app">
      <Sidebar/>
      <main className='content'>
        <TopBar/>
        <Routes>
              <Route path="/" element ={<Dashboard/>}/>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
        </Routes>

      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
