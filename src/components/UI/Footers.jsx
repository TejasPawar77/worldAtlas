import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import footerContact from "../../api/footerData.json"

export const Footers = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    };
    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footerContact.map((curData, index)=>{
                    const {icon, title, details} = curData;

                    return(
                        <div className="footer-contact gird grid-two-cols" key={index}>
                            <div className="footer-contact-text">
                                <p>{footerIcon[icon]} {title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </footer>
    )
};