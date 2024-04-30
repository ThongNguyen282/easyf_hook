import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState("");

    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        const formValue = {
            title: value,
        };
        onSubmit(formValue);
        // resest form

        setValue("");
    };
    return (
        <>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type="text"
                    value={value}
                    onChange={(e) => {
                        handleValueChange(e);
                    }}
                />
            </form>
        </>
    );
}

TodoForm.propTypes = {
    onSubmit: PropTypes.array,
};
TodoForm.defaultProps = {
    onSubmit: null,
};

export default TodoForm;
