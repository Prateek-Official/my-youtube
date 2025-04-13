import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="pt-24">
        <Header />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
