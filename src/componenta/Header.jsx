import React from "react";
import Menu from "../assets/Menu.png";
import { styled } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#707072",
    color: "#c3c4c5",
    maxWidth: 220,
    fontSize: 12,
  },
}));

const Header = () => {
  const TargetLink = ({ url, children }) => (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <heaader className="flex items-center justify-end gap-3 py-3">
      <TargetLink url={"https://mail.google.com/mail/u/0/?tab=rm&ogbl"}>
        <button className="text-[14px] font-medium hover:underline">
          Gmail
        </button>
      </TargetLink>
      <TargetLink url={"https://www.google.com/imghp?hl=ru&tab=ri&ogbl"}>
        <button className="text-[14px] font-medium hover:underline">
          Images
        </button>
      </TargetLink>
      <Tooltip title="Google apps">
        <button className="h-9 w-9 rounded-[50%] bg-[#ffffff00] p-[6px] hover:bg-[#ffffff66]">
          <img src={Menu} alt="menu icon" />
        </button>
      </Tooltip>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography>Google account</Typography>
            {"Shiro Kirutsuga"} {"shirokirutsuga@gmail.com"}
          </React.Fragment>
        }
      >
        <button className="flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#ffffff00] hover:bg-[#ffffff66]">
          <Avatar
            src="https://lh3.googleusercontent.com/ogw/AF2bZyhw2sA6dpEA0lWvGVpdtZsrlTimuGt6VtmUVARv=s32-c-mo"
            sx={{ width: 32, height: 32 }}
            alt="Remy Sharp"
          />
        </button>
      </HtmlTooltip>
    </heaader>
  );
};

export default Header;
