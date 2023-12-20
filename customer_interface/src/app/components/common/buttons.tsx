import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface CommonButtonProps {
    text?: string;
    id?: string;
    type?: "button" | "submit" | "reset"; // Update the type prop here
    title?: string;
    onClick?: () => void;
    form?: string;
    hidden?: boolean;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
  }
  
  export const CommonButton: React.FC<CommonButtonProps> = ({
    text,
    id,
    type,
    title,
    onClick,
    form,
    hidden,
    loading,
    disabled,
    className,
    
    
    
  }) => {
    if (hidden) {
      return null;
    }
  
    return loading ? (
      <button
        disabled={true}
        className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        <FontAwesomeIcon icon={FaPlus} className="fa-spin px-6"/>
      </button>
    ) : (
      <button
        id={id}
        type={type}
        onClick={onClick}
        className="relative rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 relative hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300"
        disabled={disabled}
        title={title}
        form={form}
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative pl-4 pr-4">
        {text}
        </span>
      </button>
    );
  };
  
  CommonButton.propTypes = {
    text: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(["button", "submit", "reset"]), // Use oneOf to define the allowed values
    title: PropTypes.string,
    onClick: PropTypes.func,
    form: PropTypes.string,
    hidden: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  };
interface CommonButtonSolidBlueProps extends CommonButtonProps {
    // Additional props specific to CommonButtonSolidBlue (if any)
  }
  
  export const CommonButtonSolidBlue: React.FC<CommonButtonSolidBlueProps> = ({
    hidden,
    loading,
    id,
    type,
    onClick,
    disabled,
    title,
    form,
    text,
    className,
  }) => {
    return (
      <CommonButton
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        hidden={hidden}
        title={title}
        form={form}
        text={text}
      />
        
      
    );
  };

  interface CircularButtonProps {
    icon?: string; // Icon image URL
    href?: string; // Link to navigate when button is clicked
    color?: string; // Background color of the button
    title: string; // Title of the button
    width?:number;
    height?:number;
    onClick?: () => void;
  }
  
  export const CircularButton: React.FC<CircularButtonProps> = ({
    icon,
    href,
    color,
    title,
    width,
    height,
  }) => {
    // bg-${color}-500
    return (
      <a href={href} className={`flex flex-col items-center text-center p-2`}>
        <div
          className={`w-full h-full rounded-full  flex justify-center items-center vvvsm:mt-[-8px] p-2`}
        >
          <img src={icon} alt="Button Icon" className='rounded-full shadow-md border-2 border-white w-[80px] h-[80px] md:w-[60px] md:h-[60px] sm:w-[38px] vvvsm:w-[40px] vvvsm:h-[40px]' />
        </div>
        <span className={`vvvsm:text-[12px]  bsm:text-[14px] bsm:ml-[-2px] vvvsm:mt-[-16px] p-2 '${color}'`} >{title}</span>
      </a>
    );
  };

  interface CommonAddButtonProps {
    icon: string;
    href?: string;
    title: string;
    color?: string;
    width?: number;
    height?: number;
    className?:string;
    onClick?: () => void;
  }
  
  // Create the reusable CommonIconButton component
  export const CommonAddButton: React.FC<CommonAddButtonProps> = ({
    icon,
    href,
    title,
    color,
    width,
    height,
    className,
    onClick,
  }) => {
    return (
      <div className={`flex flex-col justify-center items-center font-bold text-20 ${className}`}>
        
        <div className="">
          <CircularButton
            icon={icon}
            href={href}
            color={color}
            title={title}
            width={width}
            height={height}
          />
        </div>
        <div className="text-[color:var(--mainTitleColor)] font-extrabold text-xl mt-[-40px] ml-10">+</div>
      </div>
    );
  };