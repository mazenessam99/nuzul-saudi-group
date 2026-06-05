import { ThemeProvider } from "@/components/theme-provider"
import { routes } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={routes} />
        </ThemeProvider>
	);
};

export default App;
