"use client";
import { Box } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";

interface Props {
  trailerKey: string;
}

const TrailerBanner = ({ trailerKey }: Props) => {
  const opts = {
    height: "500",
    width: "100%",
    borderRadius: "20px",
  };
  return (
    <>
      <YouTube videoId={trailerKey} opts={opts} />
    </>
  );
};

export default TrailerBanner;
