import React, { ChangeEvent, ReactElement, ReactNode, useState,useRef, forwardRef, useImperativeHandle  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';



interface SearchInputProps {
  id: string;
  placeholder: string;
  icon?: IconDefinition | string;
  required?: boolean;
  onChange?: (e: any) => void;
  isDisabled?:boolean;
  defaultvalue?:string;
   // Icon from FontAwesome
}

export const CommonIconInput: React.FC<SearchInputProps> = ({ placeholder, icon ,onChange,isDisabled,defaultvalue }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onChange && onChange(event); // Pass the event to the parent component if onChange is provided
  };

  return (
    <div className=" h-full justify-center flex items-center rounded-md shadow-md transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
       {/* shadow-[0_4px_9px_-4px_#3b71ca]  */}
      <div>
      <button
          type="submit"
          className={`flex items-center rounded-l-md border border-white justify-center w-12 h-14  text-white 
            ${search.length > 0 ? 'bg-[color:var(--mainTitleLightestColor)]' : 'bg-[color:var(--lightBackgroundGreyColor)]  cursor-not-allowed'}`}
          disabled={search.length === 0}
        >
          {typeof icon === 'string' ? (
            <img src={icon} alt="Icon" className="h-4 w-4 text-red-400" />
          ) : (
            icon && <FontAwesomeIcon icon={icon} className="h-10 w-4 text-red-500" />
          )}
        </button>
      </div>
      <div className="w-full">
        <input
          type="search"
          
          defaultValue={defaultvalue}
          onChange={handleSearchChange}
          className="w-full h-9 px-4 py-1 text-gray-800 focus:outline-none"
          placeholder={placeholder}
          disabled={isDisabled}

          
        />
      </div>
    </div>
  );
};  

