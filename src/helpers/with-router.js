import {useParams} from "react-router-dom";
import React from "react";

export const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};
