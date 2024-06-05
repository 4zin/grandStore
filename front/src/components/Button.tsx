import { Link } from "react-router-dom";

export function Button({
  text,
  link,
  icon,
  onClick,
}: {
  text: string;
  link: string;
  icon: JSX.Element;
  onClick?: () => void;
}) {
  return (
    <div className="border-2 border-accents rounded-md px-2 py-1 active:translate-y-1 transition-all duration-100 hover:bg-accents">
      {onClick ? (
        <button onClick={onClick} className="flex flex-col items-center">
          {icon}
          {text}
        </button>
      ) : (
        <Link to={link} className="flex flex-col items-center">
          {icon}
          <button>{text}</button>
        </Link>
      )}
    </div>
  );
}
