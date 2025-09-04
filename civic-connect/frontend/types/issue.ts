export type Issue = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: "open" | "in-progress" | "resolved";
  createdAt: string;
  updatedAt: string;
};
