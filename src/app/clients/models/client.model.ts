export interface Client {
  id: number;
  name: string;
  title: string;
  avatar?: string;
  quote?: string;

  [key: string]: string | number | undefined;
}
