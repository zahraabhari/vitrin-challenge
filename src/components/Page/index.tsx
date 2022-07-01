import React from "react";
import Head from "next/head";

export interface PageProps {
  title?:string
  description?:string
  children: React.ReactElement|string
}
export default function Page({
  title,
  description,
  children,
}:PageProps) {

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

    </Head>
      {children}                
    </>
  );
}
