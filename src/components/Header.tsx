// import avatarSvg from "../assets/avatar.svg";

// interface HeaderProps {
//   name: string;
//   role: string;
//   activeSection: "web" | "android";
//   onSectionChange: (section: "web" | "android") => void;
// }

// export function Header({
//   name,
//   role,
// }: // activeSection,
// // onSectionChange,
// HeaderProps) {
//   return (
//     <header className="header">
//       <div className="header-top">
//         <div className="header-identity">
//           <img src={avatarSvg} alt={`${name}'s avatar`} className="avatar" />
//           <div className="header-info">
//             <h1 className="header-name">{name}</h1>
//             <p className="header-role">{role}</p>
//           </div>
//         </div>
//         {/* <Navigation
//           activeSection={activeSection}
//           onSectionChange={onSectionChange}
//         /> */}
//       </div>
//     </header>
//   );
// }
import avatarImg from "../assets/__hiyajou_maho.jpg";

interface HeaderProps {
  name: string;
  role: string;
}

export function Header({ name, role }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-identity">
          <img src={avatarImg} alt={`${name}'s avatar`} className="avatar" />
          <div className="header-info">
            <h1 className="header-name">{name}</h1>
            <p className="header-role">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
