import Icon from '@mui/material/Icon';


const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard />
    },
    {
        type: "collapse",
        name: "Schedule Recommendation",
        key: "schedule-recommendation",
        icon: <Icon fontSize="small">local_library</Icon>,
        route: "/tables",
        component: <ScheduleRecommendation />
    },
    {
        type: "collapse",
        name: "Course Recommendation",
        key: "course-recommendation",
        icon: <Icon fontSize="small">laptop_mac</Icon>,
        route: "/billing",
        component: <CourseRecommendation />
    },
    {
        type: "collapse",
        name: "Task Management",
        key: "task-management",
        icon: <Icon fontSize="small">checklist</Icon>,
        route: "/rtl",
        component: <TaskManagement />
    },
    {
        type: "collapse",
        name: "Sign Out",
        key: "sign-out",
        icon: <Icon fontSize="small">logout</Icon>,
        route: "/notifications",
        component: <Signout />
    },
]