const FormRowSelect = ({
    name,
    labelText,
    list,
    onChange,
    defaultValue = "",
}) => {
    return (
        <div className="form-row">

            <select
                onChange={onChange}
                name={name}
                id={name}
                defaultValue={defaultValue}
            >
                {list.map((itemValue) => {
                    return (
                        <option key={itemValue} value={itemValue}>
                            {itemValue}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
export default FormRowSelect;