import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./element-components/NavBar";
import CategoryBar from "./element-components/CategoryBar";
import CommentsPage from "./page-components/CommentsPage";
import ReviewsPage from "./page-components/ReviewsPage";
import SignInPage from "./page-components/SignInPage";
import NewReviewPage from "./page-components/NewReviewPage";
import { getUsers, getCategories } from "./utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getCategories().then((results) => {
      setCategories(results);
    });
  }, [setCategories]);

  useEffect(() => {
    getUsers().then((results) => {
      setUsers(results);
    });
  }, []);

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");
    if (prevLoggedInUser) {
      setCurrentUser(prevLoggedInUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <SignInPage
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          </Route>
          <Route exact path="/reviews/">
            <NavBar />
            <CategoryBar categories={categories} />
            <ReviewsPage currentUser={currentUser} />
          </Route>
          <Route exact path="/reviews/:category">
            <NavBar />
            <CategoryBar categories={categories} />
            <ReviewsPage currentUser={currentUser} />
          </Route>
          <Route exact path="/comments/:review_id">
            <NavBar />
            <CategoryBar categories={categories} />
            <CommentsPage currentUser={currentUser} categories={categories} />
          </Route>
          <Route exact path="/newreview">
            <NavBar />
            <NewReviewPage categories={categories} currentUser={currentUser} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
