import { BrowserRouter, Routes, Route } from "react-router-dom";

import TowerSelector from "./components/TowerSelector";
import FloorSelector from "./components/FloorSelector";
import ApartmentSelector from "./components/ApartmentSelector";
import ApartmentDetailsModal from "./components/ApartmentDetailsModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TowerSelector />} />
        <Route path="/tower/:towerId" element={<FloorSelector />} />
        {/* Nest modal inside apartment selector */}
        <Route
          path="/tower/:towerId/floor/:floorId"
          element={<ApartmentSelector />}
        >
          <Route
            path="apartment/:apartmentId"
            element={<ApartmentDetailsModal />}
          />
        </Route>

        {/* Optional: full-page fallback if user lands directly on modal path */}
        {/* <Route
          path="/tower/:towerId/floor/:floorId/apartment/:apartmentId"
          element={<ApartmentDetails />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
