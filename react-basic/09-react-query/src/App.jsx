import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import SearchParams from "./serachParams/SearchParams";

const queryClient = new QueryClient();

const App = () => {
  return (
      // <div>
      // <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/" element={<SearchParams/>}/>
          </Routes>
        </BrowserRouter>
      // </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
