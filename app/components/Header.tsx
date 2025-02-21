import { Github, Linkedin, Mail, Codepen, Instagram } from "lucide-react";

export default function Header() {
  return (
    <section className=" py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Muhammad Fadll</h1>
        <p className="text-xl  mb-6">Front End Developer</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/fadelun"
            className=" hover:text-neutral-600"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammadfadll"
            className=" hover:text-neutral-600"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=fadeljourney@gmail.com"
            className=" hover:text-neutral-600"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/fadelun_10/"
            className=" hover:text-neutral-600"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://codepen.io/muhammadfadll"
            className=" hover:text-neutral-600"
          >
            <Codepen size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
