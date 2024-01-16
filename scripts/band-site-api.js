const key = "?api_key=dd540e27-a15c-4649-bd3f-34c7db5d8d11";

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const url = `${this.baseUrl}comments${this.apiKey}`;
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
      data.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
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

  async deleteComment(commentId) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}comments/${commentId}/${this.apiKey}`,
        { method: "delete" }
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
