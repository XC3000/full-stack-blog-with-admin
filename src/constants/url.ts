export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://full-stack-blog-with-admin.vercel.app";

console.log(process.env.NODE_ENV);
