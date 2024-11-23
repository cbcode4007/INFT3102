import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <h3>Welcome!</h3>
      <p>This is my site for Assignment 2 of Web Development Frameworks. It iterates on its predecessor with the use of Next.js as an SSG and Strapi to retrieve its content from a CMS.</p>
      <img src="http://localhost:1337/uploads/nextjs_and_strapi_56f3814afb.jpg" className="center-img"></img>
    </div>
  );
}

export const metadata: Metadata = {
  title: "CC - Home",
  description: "Home Page",
};