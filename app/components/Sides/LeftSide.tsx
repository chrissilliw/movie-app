"use client";
import {
  ContrastOutlined,
  SettingsOutlined,
  StarBorderRounded,
  ThumbUpAltRounded,
  LocationSearching,
  TrendingUp,
  SkipNext,
  AccessTime,
  WorkspacePremium,
} from "@mui/icons-material";
import { Container } from "@mui/joy";
import {
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListItemButton,
  Divider,
  Link,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const sideWidth = 280;
const iconMinWidth = 30;

const LeftSide = () => {
  const router = useRouter();
  const pathname = usePathname();

  const leftSideItem = {
    color: "#787B83",
    "&:hover": {
      color: "#fff",
      "& .MuiListItemIcon-root": {
        color: "red",
      },
    },
  };

  const leftSideIcon = {
    color: "#787B83",
    "&:hover": {
      color: "red",
    },
  };

  const menuItems = [
    { name: "Upptäck", icon: <LocationSearching />, link: "discover" },
    { name: "Populärt", icon: <StarBorderRounded />, link: "popular" },
    { name: "Topprankade", icon: <WorkspacePremium />, link: "top_rated" },
    { name: "Kommer snart", icon: <AccessTime />, link: "upcoming" },
    { name: "Veckans flugor", icon: <TrendingUp />, link: "trending" },
  ];

  const menuItems2 = [
    { name: "Inställningar", icon: <SettingsOutlined /> },
    { name: "Dark Mode", icon: <ContrastOutlined /> },
  ];

  return (
    <>
      <Container disableGutters sx={{ width: sideWidth }}>
        <List sx={{ pl: 2 }}>
          <ListSubheader sx={{ mt: 4 }}>Menu</ListSubheader>
          {menuItems.map((item) => {
            const isActive = pathname.endsWith(item.link);
            const basePath = pathname.includes("/movies")
              ? "/movies/"
              : "/shows/";
            return (
              <Link
                key={item.name}
                href={basePath + item.link}
                underline="none"
                sx={leftSideItem}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: iconMinWidth, pr: 2 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
        <Divider sx={{ ml: 3 }} />
        <List sx={{ pl: 2 }}>
          <ListSubheader>Generellt</ListSubheader>
          {menuItems2.map((item) => {
            return (
              <ListItemButton key={item.name}>
                <ListItemIcon sx={{ minWidth: iconMinWidth, pr: 2 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            );
          })}
        </List>
      </Container>
    </>
  );
};

export default LeftSide;
