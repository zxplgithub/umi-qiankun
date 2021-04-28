import React from 'react';

const RenderComponent: React.FC<any> = (props) => {
    // props
    const { formatMessage } = props;

    return React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { formatMessage });
    });
};

export default RenderComponent;
