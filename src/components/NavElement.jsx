/* eslint-disable react/prop-types */
const NavElement = ({ isScrolled, activeSection, sectionId }) => {
    
    // Capitalize first letter
    const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);

    return (
        <li className={`list-none w-full`}>
            <a
                className={`
                ${activeSection === sectionId ? "glass-bg " : ""}
                ${isScrolled ? "text-left" : "text-center glass-bg"}
                inline-block w-full text-white no-underline text-base font-medium
                py-4 px-8 hover:bg-secondary-gray rounded-xl 
                `}
                href={`#${sectionId}`}
            >
                {sectionName}
            </a>
        </li>
    );
};

export default NavElement;
