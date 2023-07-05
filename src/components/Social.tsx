/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = ({ href, icon, label }) => {
    return (
        <a
            rel="noreferrer"
            target={"_blank"}
            href={href}
            className="bg-primary-gray text-white no-underline text-center py-2 px-4 rounded-md text-sm flex transition-all duration-200 items-center hover:bg-secondary-gray"
        >
            <span className="inline-block mr-2 text-lg text-primary-green">
                <FontAwesomeIcon icon={icon} />
            </span>
            <span>{label}</span>
        </a>
    );
};

export default Social;
