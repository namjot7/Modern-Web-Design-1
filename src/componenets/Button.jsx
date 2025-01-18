import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className, href, onClick, children, px, white }) => { // children, px, white, 

    const btnProps = `button cursor-pointer relative inline-flex justify-content items-center h-11  
        hover:text-color-1 transition-colors
        ${px || "px-7"}
        ${className || ''} 
        ${white ? 'text-n-8' : 'text-n-1'}`;

    const renderButton = () => (
        <button className={btnProps} onClick={onClick}>
            <span className='z-2'>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    const renderLink = () => (
        <a herf={href} className={btnProps}>
            <span className='z-2'>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    // check if Link is present
    return href ? renderLink() : renderButton();
}
export default Button;