import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";

interface StatsProps {
  yearsCoding: number;
  numRepos: number;
  contributions: number;
  languagesUsed: number;
}
function Stats({
  yearsCoding,
  numRepos,
  contributions,
  languagesUsed,
}: StatsProps) {
  return (
    <>
      <Stat
        title="Years Experience"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={yearsCoding}
      />
      <Stat
        title="Number of Git Repos"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={numRepos}
      />
      <Stat
        title="Number of Contributions"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={contributions}
      />
      <Stat
        title="Languages Used"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={languagesUsed}
      />
    </>
  );
}

export default Stats;
