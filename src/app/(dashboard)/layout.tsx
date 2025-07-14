import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Footer from "./Footer";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          overflow: "auto",
        }}
      >
        <PageContainer title="" breadcrumbs={[]} style={{ flex: 1 }}>
          {props.children}
        </PageContainer>
        <Footer />
      </div>
    </DashboardLayout>
  );
}
