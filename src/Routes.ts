import { DashboardIcon, HomeIcon } from "./assets/icons";
import { Home, Dashboard, Dropdown } from "./screens";
import { EducationInformation, JobInformation, Login, ProjectInformation, Register } from "./screens/Auth";
import { SkillsInformation, SchoolInformation } from "./screens/Auth/Education";
import { ProjectDetails } from "./screens/Auth/Project";

const authRoutes = [
    {
        name: "Login",
        component: Login
    },
    {
        name: "Register",
        component: Register
    },
    {
        name: "JobInformation",
        component: JobInformation
    },
    {
        name: "EducationInformation",
        component: EducationInformation
    },
    {
        name: "ProjectInformation",
        component: ProjectInformation
    },
    {
        name: "DropdownSearch",
        component: Dropdown
    },
    {
        name: "SchoolInformation",
        component: SchoolInformation
    },
    {
        name: "SkillsInformation",
        component: SkillsInformation
    },
    {
        name: "ProjectDetails",
        component: ProjectDetails
    }
]

const homeRoutes = [
    {
        name: "Home",
        component: Home,
        iconName: HomeIcon
    },
    {
        name: "Dashboard",
        component: Dashboard,
        iconName: DashboardIcon
    }
]

export { authRoutes, homeRoutes };