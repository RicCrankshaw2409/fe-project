import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-board-games.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi
    .get("/categories")
    .then((response) => {
      return response.data.categories;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getReviews = (sortBy) => {
  let path;
  sortBy ? (path = `/reviews?sort_by=${sortBy}`) : (path = `/reviews`);
  return gamesApi
    .get(path)
    .then((response) => {
      return response.data.reviews;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

export const getCurrentReview = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

export const getUsers = () => {
  return gamesApi.get("/users").then((response) => {
    return response.data.result;
  });
};

export const uploadComments = (commentInput, currentUser, review_id) => {
  console.log(commentInput, currentUser, review_id);
  return gamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: currentUser,
      body: commentInput,
    })
    .then(() => {
      console.log("item successfully uploaded");
    })
    .catch((err) => {
      console.dir(err);
    });
};
