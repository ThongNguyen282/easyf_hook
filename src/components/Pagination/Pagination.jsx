import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
    const { pagination, onPaceChange } = props;
    const { _page, _limit, _totalRows } = pagination;
    // console.log("check", _page, _limit, _totalRow);
    const totalPages = Math.ceil(_totalRows / _limit);
    // console.log("check", totalPages);
    const handlePageChange = (newPage) => {
        if (onPaceChange) {
            onPaceChange(newPage);
        }
    };

    return (
        <>
            <div>
                <button
                    disabled={_page <= 1}
                    onClick={() => {
                        handlePageChange(_page - 1);
                    }}
                >
                    Prev
                </button>
                <button
                    disabled={_page >= totalPages}
                    onClick={() => {
                        handlePageChange(_page + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
}

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPaceChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPaceChange: null,
};
export default Pagination;
