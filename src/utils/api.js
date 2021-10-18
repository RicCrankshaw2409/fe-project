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

export const getReviews = () => {
  return gamesApi.get("/reviews").then((response) => {
    return response.data.reviews;
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
