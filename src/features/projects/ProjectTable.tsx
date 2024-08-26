import ProjectRow from "./ProjectRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
// import { useSearchParams } from "react-router-dom";
// import Spinner from "../../ui/Spinner";
// import Empty from "../../ui/Empty";

function ProjectTable() {
  //   const [searchParams] = useSearchParams();

  //   if (isLoading) return <Spinner />;
  //   if (!cabins.length) return <Empty resourceName="cabins" />;

  // filter

  //TODO: remove in production
  const data: string[] = [];
  for (let i = 0; i < 11; i++) {
    data.push("test");
  }
  return (
    <Menus>
      <Table columns="3fr 9fr .8fr 3fr 1fr">
        <Table.Header>
          <div>Title</div>
          <div>Description</div>
          <div>Size</div>
          <div>Language</div>
          <div>Link</div>
        </Table.Header>
        <Table.Body
          data={data}
          render={(project) => (
            //TO DO: add project prop: project={project} key={project.id}
            <ProjectRow key={project.id} />
          )}
        />
        <Table.Footer>
          <Pagination count={data.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default ProjectTable;
