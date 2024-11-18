"use client";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = {
  servers: any;
};

export const Client = ({ servers }: Props) => {
  return <Typography>{JSON.stringify(servers, undefined, 0)}</Typography>;
};
