import styled from "styled-components";

import Table from "../../ui/Table";
import Button from "../../ui/Button";

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

function ProjectRow() {
  return (
    <Table.Row>
      <Project>ABC App</Project>
      <Description>
        Creates a displays everything a person could want
      </Description>
      <Size> 40kb </Size>
      <Languages> 10000</Languages>
      <Link>
        <Button $size="small" $variation="primary">
          Github
        </Button>
      </Link>
    </Table.Row>
  );
}

export default ProjectRow;
