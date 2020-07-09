import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "dashboard",
        title: "Dashboard",
        icon: "dashboard",
        translate: "NAV.DASHBOARD",
        type: "item",
        url: "dashboard"
    },
    {
        id: "reports",
        title: "Reports",
        translate: "NAV.REPORTS.TITLE",
        type: "collapsable",
        icon: "assignment",
        children: [
            {
                id: "consolidated",
                title: "Consolidated",
                translate: "NAV.REPORTS.CONSOLIDATED",
                type: "item",
                icon: "domain",
                url: "/admin/reports/consolidated"
            },
        ]
    }
];
