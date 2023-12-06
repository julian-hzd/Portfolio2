import githubLogo from "/icons8-github.svg";
import linkedinLogo from "/icons8-linkedin.svg";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center space-x-10 h-4 absolute bottom-40 w-full">
      <a href="https://github.com/julian-hzd" target="_blank" rel="noreferrer">
        <img src={githubLogo} />
      </a>
      <a
        href="https://linkedin.com/in/julian-hernandez-1a0237252"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinLogo} />
      </a>
    </footer>
  );
}
