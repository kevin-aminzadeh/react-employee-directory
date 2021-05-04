import axios from "axios";

const API = {
  fetchUsers: async function () {
    const res = await axios.get(
      "https://randomuser.me/api/?results=50&nat=au,us"
    );
    const users = res.data.results;

    return users.map((user) => {
      return {
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        location: {
          city: user.location.city,
          state: user.location.state,
        },
        email: user.email,
        image: user.picture.thumbnail,
      };
    });
  },
};

export default API;
