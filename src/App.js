import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useEffect, useState } from "react";

import { KindeProvider } from "@kinde-oss/kinde-auth-react";
const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <KindeProvider
      clientId="afbfaf2eb6c94604adb1869a072f04c2"
      domain="https://sasefiedauth.kinde.com"
      logoutUri="https://invisible-assignment.vercel.app/"
      redirectUri="https://invisible-assignment.vercel.app/"
    >
      <div className="dark">{routing}</div>
    </KindeProvider>
  );
};

export default App;
