import Api from "./api"; 

export const getRunActivity = async (id) => {
    try {
      const response = await Api.get(`/RunActivity/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};