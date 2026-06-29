import {
    SiCodeforces,
    SiCodechef,
    SiLeetcode,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface CompetitiveProfile {
    platform: string;
    username: string;
    rating: string;
    description: string;
    url: string;
    icon: IconType;
    color: string;
}

export const competitiveProfiles: CompetitiveProfile[] = [
    
    {
        platform: "LeetCode",
        username: "piyushlokhande07",
        rating: "1870",
        description: "700+ problems solved",
        url: "https://leetcode.com/u/piyushlokhande07/",
        icon: SiLeetcode,
        color: "#FFA116",
    },
    {
        platform: "Codeforces",
        username: "piyushkailas77",
        rating: "1448",
        description: "400+ problems solved",
        url: "https://codeforces.com/profile/piyushkailas77",
        icon: SiCodeforces,
        color: "#1F8ACB",
    },
    {
        platform: "CodeChef",
        username: "piyush_7l",
        rating: "1778",
        description: "100+ problems solved",
        url: "https://www.codechef.com/users/piyush_7l",
        icon: SiCodechef,
        color: "#5B4638",
    },
  ];