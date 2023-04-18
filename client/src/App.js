import { React } from "react";
import { Flowbite } from "flowbite-react";
import Routes from "./Routes/Routes";

function App() {
  return (
    <div>
      {/* FLOWBITE DARK MODE FUNCTIONALITY */}
      <Flowbite
        theme={{
          theme: {
            alert: {
              color: {
                primary: "bg-primary",
              },
            },
          },
        }}
      >
        {/*LINUX*/}
        {/* ROUTES */}
        <div className="dark:bg-gray-900">
          <Routes />
        </div>
      </Flowbite>
    </div>
  );
}

export default App;
