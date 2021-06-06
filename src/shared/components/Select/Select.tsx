import { ReactElement, useCallback, useState } from 'react';
interface SelectInputProps {
  label: string;
  options: string[];
  addSelectAllOption: boolean;
  onChange: Function;
  currentSelection: string;
}

const Select = ({
  label,
  options,
  addSelectAllOption,
  onChange,
  currentSelection,
}: SelectInputProps): ReactElement => {
  const [selecion, setSelection] = useState(currentSelection);

  const handleSelectionChange = useCallback((ev) => {
    setSelection(ev.target.value);
    onChange(ev);
  }, [onChange]);

  const content = options.map((option: string, indx: number) => (
    <option key={indx} value={option}>
      {option}
    </option>
  ));
  return (
    <label>
      {label}
      <select value={selecion} onChange={handleSelectionChange}>
        {addSelectAllOption ? <option value="all">all</option> : null}
        {content}
      </select>
    </label>
  );
};

export default Select;
