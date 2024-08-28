import { useEffect, useState } from "react";
import { fetchGithubData, GitHubRepo } from "../service/apiGithub";

type UseGithubDataResult = [GitHubRepo[], boolean, string | null];
export function useGithubData(): UseGithubDataResult {
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getGithubData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const githubData = await fetchGithubData("shawnrsidwell");
        setGithubRepos(githubData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };
    getGithubData();
  }, []);

  return [githubRepos, isLoading, error];
}
