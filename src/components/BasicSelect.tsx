import { useState } from 'react';

interface BasicSelectProps {
  value: string;
  setValue: (explorer: string) => void;
  list: string[];
  disabled?: boolean;
  dataTest?: string;
}

export const BasicSelect = ({ list, value, setValue }: BasicSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const selectItem = (explorer?: string) => {
    setIsOpen(false);
    if (!explorer) return;
    setValue(explorer);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, explorer?: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      selectItem(explorer);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{value}</button>
      {isOpen && (
        <ul role='listbox'>
          {list.map((item) => (
            <li
              key={item}
              role='option'
              tabIndex={0}
              aria-selected={item === value}
              onClick={() => selectItem(item)}
              onKeyDown={(event) => handleKeyDown(event, item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
