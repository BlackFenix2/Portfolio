import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
