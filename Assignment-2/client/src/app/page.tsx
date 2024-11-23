import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <h3>Welcome!</h3>
      <p>This is my site for Assignment 2 of Web Development Frameworks. It iterates on its predecessor with the use of Next.js as an SSG and Strapi to retrieve its content from a CMS.</p>
    </div>
  );
}

export const metadata: Metadata = {
  title: "CC - Home",
  description: "Home Page",
};