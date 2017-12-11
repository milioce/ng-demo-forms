export interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  country: any;
  username?: string;
  languages?: string[];
}
