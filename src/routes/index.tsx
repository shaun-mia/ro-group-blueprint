import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Ventures from "@/pages/Ventures";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import RidersOption from "@/pages/venture-pages/RidersOption";
import RoCourier from "@/pages/venture-pages/RoCourier";
import Furnito from "@/pages/venture-pages/Furnito";
import RoMart from "@/pages/venture-pages/RoMart";
import VentureLayout from "@/layouts/VentureLayout";
import CareerLayout from "@/layouts/CareerLayout";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { 
    path: "/ventures",
    element: <VentureLayout />,
    children: [
      { index: true, element: <Ventures /> },
      { path: "riders-option", element: <RidersOption /> },
      { path: "ro-courier", element: <RoCourier /> },
      { path: "furnito", element: <Furnito /> },
      { path: "ro-mart", element: <RoMart /> },
    ]
  },
  {
    path: "/careers",
    element: <CareerLayout />,
    children: [
      { index: true, element: <Careers /> },
      // Add career sub-routes here
    ]
  },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> }
]);
