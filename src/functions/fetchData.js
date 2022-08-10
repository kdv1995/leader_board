import axios from "axios";
import { setData } from "store/initiaData/initialDataSlice";

export const fetchData = () => {
  return async (dispatch) => {
    axios
      .get("http://coding-test.cube19.io/frontend/v1/starting-state")
      .then((response) => dispatch(setData(response.data)));
    try {
      console.log("Successful");
    } catch (error) {
      console.log(error);
    }
  };
};
