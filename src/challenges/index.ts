
import { Challenges, ChallengesStatus } from "@/types/challenge";
import TestimonialCard from "@/challenges/01-testimonial-card";
import BlogCard from "@/challenges/02-blog-card";
import ProfileCard from "@/challenges/03-profile-card";
import ButtonComponent from "@/challenges/04-button-component";
import ExtensionsList from "@/challenges/05-extensions-list";
import PersonalBlog from "@/challenges/06-personal-blog";

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
    path: "/extensions-list",
    title: "Extensions List",
    Component: ExtensionsList,
    status: ChallengesStatus.Done,
    github: "",
  },
  {
    path: "/personal-blog",
    title: "Personal Blog",
    Component: PersonalBlog,
    status: ChallengesStatus.Done,
    github: "",
  },
]
