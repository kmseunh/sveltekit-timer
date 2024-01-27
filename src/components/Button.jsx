import { Link } from 'react-router-dom';

const Button = ({ btnName, onClick, className, to }) => {
    return (
        <Link to={to}>
            <button
                className={`rounded-[70px] h-[5.625rem] pt-5 pr-14 pb-5 pl-14 flex flex-row gap-2.5 items-center justify-center relative overflow-hidden font-light uppercase text-[2.625rem] ${className}`}
                onClick={onClick}
            >
                {btnName}
            </button>
        </Link>
    );
};

export default Button;
