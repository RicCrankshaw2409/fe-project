import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
