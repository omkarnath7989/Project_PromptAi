import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";

export const metadata = {
  title: "PromptAi",
  description: "discover and share ai promts",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider> 
      </body>
    </html>
  );
};

export default layout;
