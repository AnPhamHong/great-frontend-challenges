import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="dark:bg-[#1C1C1E] border shadow-md border-brand-solid dark:border-secondary mx-auto mt-4 rounded-xl w-[90%] max-w-[400px] px-6 py-8">
      <div className="flex flex-col gap-6 items-center text-center">
        <img
          src="https://images.unsplash.com/photo-1742787584125-d94d44334047?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar-user"
          className="rounded-full w-20 h-20 object-cover shadow-md"
        />
        <div>
          <h2 className="text-xl font-semibold text-primary dark:text-white">
            Sarah Dole
          </h2>
          <p className="text-sm text-secondary dark:text-[#8E8E93] mt-1">
            Front End Engineer @ Microsoft
          </p>
        </div>
        <p className="text-sm text-secondary dark:text-[#B0B0B0]">
          I turn coffee into bugs which are fixed by someone else. <br />
          Certified Stack Overflow and ChatGPT developer.
        </p>
        <button className="w-full rounded-lg bg-[#4338CA] text-white px-4 py-3 font-medium shadow-md hover:bg-[#5a4cff] hover:brightness-110 hover:scale-[1.02] transition-all duration-300">
          Contact me
        </button>
        <div className="flex justify-center gap-5 text-[#4338CA] dark:text-[#6A5AE0] text-xl">
          <Github className="cursor-pointer hover:text-white transition-colors duration-300" />
          <Linkedin className="cursor-pointer hover:text-white transition-colors duration-300" />
          <Instagram className="cursor-pointer hover:text-white transition-colors duration-300" />
          <Twitter className="cursor-pointer hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}
