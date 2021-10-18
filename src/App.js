import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./element-compents/NavBar";
import CategoryBar from "./element-compents/CategoryBar";
import CommentsPage from "./page-components/CommentsPage";
import ReviewsPage from "./page-components/ReviewsPage";
import SignInPage from "./page-components/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <SignInPage />
          </Route>
          <Route exact path="/reviews">
            <NavBar />
            <CategoryBar />
            <ReviewsPage />
          </Route>
          <Route exact path="/reviews/:review_id">
            <NavBar />
            <CategoryBar />
            <CommentsPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
