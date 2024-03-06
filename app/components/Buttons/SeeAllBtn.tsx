"use client";
import { Button } from "@mui/joy";
import Link from "next/link";
import React from "react";

const SeeAllBtn = () => {
  return (
    <>
      <Link
        href={"/movies"}
        className="border rounded-full border-current px-24 py-2"
      >
        Se alla
      </Link>
    </>
  );
};

export default SeeAllBtn;
