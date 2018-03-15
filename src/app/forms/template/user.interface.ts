export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  country: any;
  postalcode?: string;
  username?: string;
  languages?: string[];
}
