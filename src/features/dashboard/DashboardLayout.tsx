import styled from "styled-components";
// import Spinner from "../../ui/Spinner";
// import SalesChart from "./SalesChart";
// import DurationChart from "./DurationChart";
// import TodayActivity from "../check-in-out/TodayActivity";
import GithubCalendar from "./GithubCalendar";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
function DashboardLayout() {
  // if (yearsCoding || numRepos || contributions || languagesUsed) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        yearsCoding={3}
        numRepos={67}
        contributions={442}
        languagesUsed={6}
      />
      {/* <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} /> */}
      <GithubCalendar />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
