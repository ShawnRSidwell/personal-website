import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const ProjectTitle = styled.div`
  font-weight: 800;
`;

interface TodayItemProps {
  project: {
    title: string;
    description: string;
    techUsed: string;
    link: string;
  };
}

function TodayItem({ project }: TodayItemProps) {
  const { title, description, techUsed, link } = project;
  return (
    <StyledTodayItem>
      <ProjectTitle> {title}</ProjectTitle>
      <div>{description}</div>
      <div>{techUsed}</div>
      <Button $size="small" $variation="primary" as={Link} to={link}>
        Click Here
      </Button>
    </StyledTodayItem>
  );
}

export default TodayItem;
