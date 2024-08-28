import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";

import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { useGithubData } from "../../hooks/useGithubData";

function ProjectTable() {
  const [githubRepos, isLoading, error] = useGithubData();

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
