export default function TestimonialCard() {
  return (
    <div className="border border-border-primary rounded-xl p-6 bg-white shadow-md mx-auto max-w-[340px]">
      <div className="flex gap-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img-user"
          width={48}
          height={48}
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="flex flex-col gap-2 justify-center">
          <h1 className="text-primary text-lg font-semibold">Sarah Dole</h1>
          <p className="text-secondary text-sm">@sarahdole</p>
        </div>
      </div>
      <p className="text-secondary text-base mt-4">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </p>
    </div>
  );
}
