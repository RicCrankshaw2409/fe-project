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
  return gamesApi
    .get("/reviews", {
      params: {
        category: category,
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

export const getCurrentReview = (review_id, createdReviewId) => {
  let path;
  createdReviewId ? (path = createdReviewId) : (path = review_id);
  return gamesApi.get(`reviews/${path}`).then((response) => {
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
    .then(() => {})
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
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {});
};

export const postReview = (reviewInput, currentUser) => {
  const { title, image, body, category, manufacturer } = reviewInput;
  return gamesApi.post(`/reviews`, {
    title: `${title}`,
    designer: `${manufacturer}`,
    owner: `${currentUser}`,
    review_img_url: `${image}`,
    review_body: `${body}`,
    category: `${category}`,
  });
};

export const removeComment = (comment_id) => {
  return gamesApi
    .delete(`/comments/${comment_id}`)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const removeReview = (review_id) => {
  return gamesApi
    .delete(`/reviews/${review_id}`)
    .then(() => {})
    .catch((err) => {
      console.dir(err);
    });
};
