import styled from "styled-components";

import Table from "../../ui/Table";
import Button from "../../ui/Button";
import { GitHubRepo } from "../../service/apiGithub";

const Project = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Description = styled.div`
  font-family: "Sono";
`;
const Size = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Languages = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Link = styled.div`
  font-family: "Sono";
  font-weight: 600;
  color: green;
`;

interface ProjectRowProps {
  project: GitHubRepo;
}

function ProjectRow({ project }: ProjectRowProps) {
  return (
    <Table.Row>
      <Project>{project.name}</Project>
      <Description>{project.description}</Description>
      <Languages> {project.language}</Languages>
      <Size> {project.size} </Size>
      <Link>
        <Button $size="small" $variation="primary">
          <a rel="stylesheet" href={project.html_url}>
            Github
          </a>
        </Button>
      </Link>
    </Table.Row>
  );
}

export default ProjectRow;
