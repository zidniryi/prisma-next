import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="My logo"
        width={100}
        height={100}
      />
      <h1>Welcome to Next.js!</h1>
      <p>Get started by editing <code>pages/index.js</code>.</p>
      <a href="https://nextjs.org/learn">Learn More</a>
    </div>
  );
}
