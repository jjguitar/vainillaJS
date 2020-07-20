import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Footer from '../templates/Footer'
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
  '/:pages': Home,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  const footer = null || document.getElementById("footer");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  footer.innerHTML = await Footer();

  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  var labelToggle = document.getElementById("texto-toogle");
  labelToggle.innerHTML = "Light Mode";

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "light");
      labelToggle.innerHTML = "Dark Mode";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      labelToggle.innerHTML = "Light Mode";
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
};

export default router;
