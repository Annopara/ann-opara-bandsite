const key = "?api_key=dd540e27-a15c-4649-bd3f-34c7db5d8d11";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const url = `${this.baseUrl}comments${this.apiKey}`;
      console.log(comment);
      console.log(url);
      const commentResponse = await axios.post(url, comment);
      const data = commentResponse.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    try {
      const response = await axios.get(`${this.baseUrl}comments${this.apiKey}`);

      const data = response.data;
      data.sort();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates${this.apiKey}`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

const newBandSiteApi = new BandSiteApi(key);

export default newBandSiteApi;
