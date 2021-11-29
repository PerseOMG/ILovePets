export interface BreedsResponse {
  message: Breeds;
  status:  string;
}

export interface Breeds {
  [key: string]: string[]
}

export interface ByBreedResponse {
  message: string[];
  status:  string;
}
