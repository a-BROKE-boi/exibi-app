const Sidebar = ({ isOpen, toggle }) => {
  const containerStyle = {
    opacity: isOpen ? 1 : 0,
    top: isOpen ? "0" : "-100%",
    position: "fixed",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    backgroundColor: "white",
    gridTemplateRows: "1fr", // Assuming a grid layout for content
    zIndex: 10,
  };

  const closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
      />
    </svg>
  );

  const navigationItems = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contacts", label: "Contacts" },
  ];

  const renderNavigation = () =>
    navigationItems.map((item) => (
      <li key={item.href}>
        <a href={item.href} onClick={toggle}>
          <p>{item.label}</p>
        </a>
      </li>
    ));

  return (
    <div className="sidebar-container" style={containerStyle}>
      <button className="absolute right-0 p-5" onClick={toggle}>
        {closeIcon}
      </button>
      <ul className="sidebar-nav text-center leading-relaxed text-xl">
        {renderNavigation()}
      </ul>
    </div>
  );
};

export default Sidebar;