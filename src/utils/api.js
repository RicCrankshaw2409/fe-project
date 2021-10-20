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

export const getReviews = (sortBy, category) => {
  // category ? (path += `?category=${category}`) : null;

  return gamesApi
    .get("/reviews", {
      params: {
        category,
        sort_by: sortBy,
      },
    })
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

export const patchReview = (review_id) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: 1 })
    .then(() => {})
    .catch((err) => {});
};

export const patchComment = (comment_id) => {
  return gamesApi
    .patch(`/comments/${comment_id}`, { inc_votes: 1 })
    .then(() => {})
    .catch((err) => {});
};

export const postReview = (
  title,
  manufacturer,
  image,
  body,
  category,
  currentUser
) => {
  console.log(title, manufacturer, image, body, category, currentUser);
  return gamesApi
    .post(`/reviews`, {
      title: `${title}`,
      designer: `${manufacturer}`,
      owner: `${currentUser}`,
      review_img_url: `${image}`,
      review_body: `${body}`,
      category: `${category}`,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.dir(err);
    });
};
