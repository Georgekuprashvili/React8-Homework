import axios from "axios";

export async function FetchData(setData) {
  try {
    const response = await axios.get("https://dummyjson.com/quotes");
  } catch (error) {
    console.log(error);
  }
}
