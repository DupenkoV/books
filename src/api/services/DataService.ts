import { worker } from "../../mocks/browser";
import { api } from "../api";

export class DataService {
  private isApiAvailable = false;

  constructor() {
    checkMode(this.isApiAvailable);
  }

  async getBooks() {
    try {
      const response = await api.get("/books");
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.log(err);
    }
  }
}

const checkMode = async (isApiAvailable: boolean) => {
  if (!isApiAvailable) {
    await worker.start();
  }
};
