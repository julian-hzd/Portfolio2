import githubLogo from "/icons8-github.svg";
import linkedinLogo from "/icons8-linkedin.svg";

export default function Footer() {
  return (
    <div
      className="flex flex-wrap justify-center space-x-10 
      h-screen sticky bottom-0"
    >
      <img src={githubLogo} href="#" />
      <img src={linkedinLogo} />
    </div>
  );
}
