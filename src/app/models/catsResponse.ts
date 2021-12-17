export interface FactsResponse {
  status:    Status;
  _id:       string;
  user:      string;
  text:      string;
  type:      string;
  deleted:   boolean;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

export interface Status {
  verified:  null;
  sentCount: number;
}
