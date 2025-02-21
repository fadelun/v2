export default function Skills() {
  return (
    <section className=" py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 ">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {[
            "HTML & CSS",
            "JavaScript",
            "Vue",
            "React",
            "Next",
            "Typescript",
            "Express",
            "Supabase",
            "Git",
            "Figma",
            "Node.js",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-dark-2 p-4 rounded shadow text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
