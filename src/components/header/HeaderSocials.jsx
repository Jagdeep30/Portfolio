import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
	return (
		<div className='socials'>
			<a href='https://www.linkedin.com/in/jagdeepsingh1693' target='_blank'>
				<BsLinkedin />
			</a>
			<a href='https://github.com/Jagdeep30' target='_blank'>
				<FaGithub />
			</a>
			<a href='https://twitter.com/Mr_Elegant4' target='_blank'>
				<FaXTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
