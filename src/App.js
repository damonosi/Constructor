import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import ErrorBoundary from "./components/error-boudary/error-boudary.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Spinner from "./components/spinner/spinner.component";

import { ScrollContainer, GlobalStyle, SiteContainer } from "./globalStyles";

import ScrollToTop from "./components/functions/scrollToTop";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const AboutPage = lazy(() => import("./pages/aboutPage/aboutPage.component"));
const LocalizarePage = lazy(() =>
  import("./pages/localizare/localizarePage.component")
);
const CanvasPage = lazy(() =>
  import("./pages/canvasPage/canvasPage.component")
);
const App = () => {
  return (
    <>
      <Header />
      <GlobalStyle />
      <ScrollToTop />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/canvas" component={CanvasPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/localizare" component={LocalizarePage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>

      <Footer />
    </>
  );
};

export default App;
