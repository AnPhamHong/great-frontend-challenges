import { Challenges, ChallengesStatus } from "../types/challenge";
import TestimonialCard from "./01-testimonial-card";
import BlogCard from "./02-blog-card";
import ProfileCard from "./03-profile-card";
import ButtonComponent from "./04-button-component";

export const challengeRoutes: Challenges = [
  {
    path: "/testimonial-card",
    title: "Testimonial Card",
    Component: TestimonialCard,
    status: ChallengesStatus.Done,
    github: "",
  },
  {
    path: "/blog-card",
    title: "Blog Card",
    Component: BlogCard,
    status: ChallengesStatus.Done,
    github: "",
  },
  {
    path: "/profile-card",
    title: "Profile Card",
    Component: ProfileCard,
    status: ChallengesStatus.Done,
    github: "",
  },
  {
    path: "/button-component",
    title: "Button Component",
    Component: ButtonComponent,
    status: ChallengesStatus.NotStarted,
    github: "",
  },
  {
    path: "/text-input",
    title: "Text Input Component",
    Component: BlogCard,
    status: ChallengesStatus.NotStarted,
    github: "",
  },
  {
    path: "/collections-grid",
    title: "Collections Grid Section",
    Component: BlogCard,
    status: ChallengesStatus.NotStarted,
    github: "",
  },
]
