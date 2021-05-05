import axios from "axios";

const API = {
  fetchUsers: async function () {
    const res = await axios.get(
      "https://randomuser.me/api/?results=50&nat=au,us"
    );
    const users = res.data.results;

    return users.map((user) => {
      return {
        firstName: user.name.first.toLowerCase(),
        lastName: user.name.last.toLowerCase(),
        gender: user.gender.toLowerCase(),
        email: user.email.toLowerCase(),
        state: user.location.state.toLowerCase(),
        city: user.location.city.toLowerCase(),
      };
    });
  },
};

export default API;
