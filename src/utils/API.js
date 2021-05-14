import axios from "axios";

const API = {
  fetchUsers: async function (page = 1, results = 50) {
    const res = await axios.get(
      `https://randomuser.me/api/?inc=id,name,gender,email,location&page=${page}&results=${results}&seed=foobar&nat=au`
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
