import React from 'react';

const Loading = () => {
    return (
        <div className="loading-container">
            <img src={require('../images/loading.gif')} alt="loading" width="30px" />
        </div>
    );
}

export default Loading;
