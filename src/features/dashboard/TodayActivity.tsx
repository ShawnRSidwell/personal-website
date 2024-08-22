import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

interface TodayActivityProps {
  recentProjects: {
    title: string;
    description: string;
    techUsed: string;
    link: string;
  }[];
}

function TodayActivity({ recentProjects }: TodayActivityProps) {
  const isLoading = false;
  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Recent Projects</Heading>
      </Row>
      {!isLoading ? (
        recentProjects?.length > 0 ? (
          <TodayList>
            {recentProjects.map((project) => (
              <TodayItem project={project} key={project.title} />
            ))}
          </TodayList>
        ) : (
          <NoActivity> No Activity Today....</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default TodayActivity;
