import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        const value = e.target.value;

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }, 300);
    };
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                    handleSearchTermChange(e);
                }}
            />
        </div>
    );
}

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultPProps = {
    onSubmit: null,
};

export default PostFilterForm;
