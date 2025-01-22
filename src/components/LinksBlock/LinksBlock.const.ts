import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";

interface ARCHIVELINK {
  title: string;
  link: string;
}

interface SOCIALMEDIALINK {
  icon: React.ElementType;
  title: string;
  link: string;
}

export const ARCHIVELINKS: ARCHIVELINK[] = [
  { title: "March 2020", link: "#" },
  { title: "February 2020", link: "#" },
  { title: "January 2020", link: "#" },
  { title: "November 1999", link: "#" },
  { title: "October 1999", link: "#" },
  { title: "September 1999", link: "#" },
  { title: "August 1999", link: "#" },
  { title: "July 1999", link: "#" },
  { title: "June 1999", link: "#" },
  { title: "May 1999", link: "#" },
  { title: "April 1999", link: "#" },
];

export const SOCIALMEDIALINKS: SOCIALMEDIALINK[] = [
  { icon: GitHubIcon, title: "GitHub", link: "#" },
  { icon: TwitterIcon, title: "Twitter", link: "#" },
  { icon: FacebookIcon, title: "Facebook", link: "#" },
];
