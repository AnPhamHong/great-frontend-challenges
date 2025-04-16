import { testimonials } from "@/data/testimonials";

export default function TestimonialCard() {
  return (
    <div className="flex flex-wrap gap-4 mx-auto">
      {testimonials.map((item, index) => {
        return (
          <div
            key={`${item.username}-${index}`}
            className="min-h-30 h-full w-full border border-border-primary rounded-xl p-6 bg-white shadow-md mx-auto max-w-96"
          >
            <div className="flex gap-4 items-center">
              <img
                src={item.avatar}
                alt="img-user"
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div className="flex flex-col gap-2 justify-center">
                <h1 className="text-primary text-lg font-semibold">
                  {item.name}
                </h1>
                <p className="text-secondary text-sm">{item.username}</p>
              </div>
            </div>
            <p className="text-secondary text-base mt-4">{item.message}</p>
          </div>
        );
      })}
    </div>
  );
}
