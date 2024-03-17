import { Link } from "react-router-dom";

const Header = () => {
  const TargetLink = ({ url, children }) => (
    <a to={url} rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <heaader className="flex items-center justify-end gap-3">
      <TargetLink url={"https://mail.google.com/mail/u/0/?tab=rm&ogbl"}>
        <button className="text-[14px] font-medium">Gmail</button>
      </TargetLink>
      <TargetLink url={"https://www.google.com/imghp?hl=ru&tab=ri&ogbl"}>
        <button className="text-[14px] font-medium">Images</button>
      </TargetLink>
    </heaader>
  );
};

export default Header;
