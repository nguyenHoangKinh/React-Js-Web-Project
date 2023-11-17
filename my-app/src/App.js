import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DeFaultComponent from "./components/DefaultComponent/DefaultComponent";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const LayoutPage = route.isShowHeader ? DeFaultComponent : Fragment;
            const Pages = route.page;
            return (
              <Route
                path={route.path}
                element={
                  <LayoutPage>
                    <Pages/>
                  </LayoutPage>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
