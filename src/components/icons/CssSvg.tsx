import { CommonIconsI } from "./icons.interface";

export const CssSvg = ({ className = "" }: CommonIconsI) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 30 30"
            height="1em"
            width="1em"
            fillRule="evenodd"
        >
            <path d="M25.428,3.333C25.238,3.121,24.967,3,24.683,3H5.317C5.033,3,4.762,3.121,4.572,3.333c-0.19,0.212-0.28,0.495-0.249,0.777 l2.202,19.823c0.044,0.403,0.329,0.74,0.719,0.851l7.48,2.137c0.09,0.026,0.183,0.039,0.275,0.039s0.185-0.013,0.275-0.039 l7.48-2.137c0.39-0.111,0.674-0.448,0.719-0.851L25.676,4.11C25.708,3.828,25.618,3.545,25.428,3.333z M20.516,13.074l-0.446,7.285 l-5.038,1.647l-5.038-1.647l-0.191-3.484h2.55l0.064,1.584l2.615,0.887l2.615-0.887l0.191-2.85h-5.612l-0.127-2.534h5.867 l0.191-2.534H9.356L9.165,8.006h11.67L20.516,13.074z"/>
        </svg>
    );
};

