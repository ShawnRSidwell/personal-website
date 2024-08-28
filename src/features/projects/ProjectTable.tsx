import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import { fetchGithubData, GitHubRepo } from "../../service/apiGithub";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

function ProjectTable() {
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
          setError(err.message); // Type-safe access to the message property
        } else {
          setError("An unknown error occurred."); // Fallback for non-Error objects
        }
      } finally {
        setIsLoading(false);
      }
    };
    getGithubData();
  }, []);

  if (!githubRepos.length) return <Empty resourceName="Github Repositories" />;
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Menus>
      <Table columns="3fr 9fr 2fr 1fr 2fr">
        <Table.Header>
          <div>Title</div>
          <div>Description</div>
          <div>Language</div>
          <div>Size</div>
          <div>Link</div>
        </Table.Header>
        <Table.Body
          data={githubRepos}
          render={(project) => (
            <ProjectRow project={project} key={project.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={githubRepos.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ProjectTable;
