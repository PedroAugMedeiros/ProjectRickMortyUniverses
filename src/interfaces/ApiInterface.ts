export interface ApiInterface {
  id: number;
  name: string;
  status: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
    url: string;
  }
  episode: string[];
};
