import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SwapATokens from "./components/SwapATokens";
import NewMarketPlace from "./pages/NewMarketPlace";
import InvestorProfile from "./pages/InvestorProfile";
import FarmProfile from "./pages/FarmProfile";
import CreatorProfile from "./pages/CreatorProfile";
import InvestorWizard from "./pages/InvestorWizard";
import YourFavorite from "./pages/YourFavorite";
import Cart from "./pages/Cart";
import LeaderBoard from "./pages/LeaderBoard";
import MobileApp from "./pages/MobileApp";
import SwapATokensWithPopup from "./pages/SwapATokensWithPopup";
import InvestorWizard1 from "./pages/InvestorWizard1";
import InvestorProfile1 from "./pages/InvestorProfile1";
import CreatorProfile1 from "./pages/CreatorProfile1";
import FarmProfile1 from "./pages/FarmProfile1";
import Menu from "./pages/Menu";
import AfterScrollingTheTitleWill from "./pages/AfterScrollingTheTitleWill";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/new-market-place":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile":
        title = "";
        metaDescription = "";
        break;
      case "/farm-profile":
        title = "";
        metaDescription = "";
        break;
      case "/creator-profile":
        title = "";
        metaDescription = "";
        break;
      case "/investor-wizard":
        title = "";
        metaDescription = "";
        break;
      case "/your-favorite":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/leaderboard":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-app":
        title = "";
        metaDescription = "";
        break;
      case "/swap-a-tokens-with-popup":
        title = "";
        metaDescription = "";
        break;
      case "/investor-wizard1":
        title = "";
        metaDescription = "";
        break;
      case "/investor-profile1":
        title = "";
        metaDescription = "";
        break;
      case "/creator-profile1":
        title = "";
        metaDescription = "";
        break;
      case "/farm-profile1":
        title = "";
        metaDescription = "";
        break;
      case "/menu":
        title = "";
        metaDescription = "";
        break;
      case "/after-scrolling-the-title-will-appear-on-top":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SwapATokens />} />
      <Route path="/new-market-place" element={<NewMarketPlace />} />
      <Route path="/investor-profile" element={<InvestorProfile />} />
      <Route path="/farm-profile" element={<FarmProfile />} />
      <Route path="/creator-profile" element={<CreatorProfile />} />
      <Route path="/investor-wizard" element={<InvestorWizard />} />
      <Route path="/your-favorite" element={<YourFavorite />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
      <Route path="/mobile-app" element={<MobileApp />} />
      <Route
        path="/swap-a-tokens-with-popup"
        element={<SwapATokensWithPopup />}
      />
      <Route path="/investor-wizard1" element={<InvestorWizard1 />} />
      <Route path="/investor-profile1" element={<InvestorProfile1 />} />
      <Route path="/creator-profile1" element={<CreatorProfile1 />} />
      <Route path="/farm-profile1" element={<FarmProfile1 />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/after-scrolling-the-title-will-appear-on-top"
        element={<AfterScrollingTheTitleWill />}
      />
    </Routes>
  );
}
export default App;
