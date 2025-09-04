import fetcher from "@/lib/fetcher"

export const createIssue = async (title: string, category: string, description: string) => {
  return fetcher("/issues", { method: "POST", body: { title, category, description } });
};

export const getIssues = async () => {
  return fetcher("/issues");
};

export const getIssueById = async (id: string) => {
  return fetcher(`/issues/${id}`);
};
