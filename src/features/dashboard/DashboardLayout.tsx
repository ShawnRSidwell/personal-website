import styled from "styled-components";
// import Spinner from "../../ui/Spinner";
// import SalesChart from "./SalesChart";
// import DurationChart from "./DurationChart";
// import TodayActivity from "../check-in-out/TodayActivity";
import GithubCalendar from "./GithubCalendar";
import Stats from "./Stats";
import { recentProjects } from "../../data/recent-projects";
import TodayActivity from "./TodayActivity";
import LanguageChart from "./LanguageChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

// if (yearsCoding || numRepos || contributions || languagesUsed) return <Spinner />;
function DashboardLayout() {
  return (
    <>
      <StyledDashboardLayout>
        <Stats
          yearsCoding={3}
          numRepos={67}
          contributions={717}
          languagesUsed={6}
        />
        <TodayActivity recentProjects={recentProjects} />
        <LanguageChart />
      </StyledDashboardLayout>
      <GithubCalendar />
    </>
  );
}

export default DashboardLayout;
