export default [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" , layout:false},
    { path: "/*" , component: "@/pages/404.tsx"}
  ]