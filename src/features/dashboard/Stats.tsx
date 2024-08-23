import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineComputerDesktop,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
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
        icon={<HiOutlineCalendarDays />}
        value={yearsCoding}
      />
      <Stat
        title="Number of Git Repos"
        color="green"
        icon={<HiOutlineComputerDesktop />}
        value={numRepos}
      />
      <Stat
        title="Number of Contributions"
        color="indigo"
        icon={<HiOutlineCpuChip />}
        value={contributions}
      />
      <Stat
        title="Languages Used"
        color="yellow"
        icon={<HiOutlineGlobeAlt />}
        value={languagesUsed}
      />
    </>
  );
}

export default Stats;
