// Import libraries
import React from 'react';

// Displays message if no photos return from search
function PhotosNotFound(){
    return(
        <div className="not-found">
            <h1>No Results Found</h1>
            <h3>That search did not return any results, please try again!</h3>
        </div>
    );
}

export default PhotosNotFound