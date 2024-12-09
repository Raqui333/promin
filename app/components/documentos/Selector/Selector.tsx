import { useCallback, useState } from 'react';
import Image from 'next/image';
import style from './Selector.module.scss';

const ICON_SIZE = 15;

type SelectorDataType = {
  label: string;
  value: string;
};

type SelectorProps = {
  title: string;
  placeholder: string;
  list: SelectorDataType[];
  onSelect: (id: number) => void;
  disabled?: boolean;
};

export default function Selector({
  title,
  placeholder,
  list,
  onSelect,
  disabled,
}: SelectorProps) {
  const [selectedItem, setSelectedItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdownVisibility = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  const handleClick = useCallback(
    (label: string) => {
      setSelectedItem(label);
      toggleDropdownVisibility();

      const item = list.find((item) => item.label === label);

      if (item) onSelect(Number(item.value));
    },
    [list, onSelect]
  );

  const filtered_list = list.filter(({ label }) =>
    label.toLocaleLowerCase().includes(searchTerm)
  );

  return (
    <div className={style.container}>
      <span className={style.titles}>{title}</span>
      <div
        className={`${style.selector} ${disabled && 'disabled'}`}
        onClick={toggleDropdownVisibility}
      >
        <span>{selectedItem || placeholder}</span>
        <Image
          src="/icons/dropdown.svg"
          alt="dropdown icon"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </div>
      {dropdownVisible && (
        <div className={style.selector_dropdown}>
          <div className={style.selector}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={style.selector_input}
            />
            <Image
              src="/icons/search.svg"
              alt="dropdown icon"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </div>
          <div className={style.selector_dropdown_content}>
            {filtered_list.map((item, index) => (
              <div
                className={style.selector_dropdown_item}
                key={index}
                onClick={() => handleClick(item.label)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
