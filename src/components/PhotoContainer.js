// Import libraries
import React, { Component } from 'react';
import Photo from './Photo';
import PhotosNotFound from './PhotosNotFound';

// Display all images fetched from Flickr API
class PhotoContainer extends Component {
    
    // Maps over all photos retrieved from Flickr
    getPhotos() {
        let results = this.props.data;
        let images;
        
        // Creates <li> for each photo from results
        // Returns 'PhotosNotFound' error message if no photos in results
        if(results.length > 0) {
            images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
        } else {
            images = <PhotosNotFound />;
        }
        
        return images;
    }

    // Display query header and all photos
    render() {
        return(
            <div className="photo-container">
                <h2>{ this.props.query }</h2>
                <ul>{ this.getPhotos() }</ul>
            </div>
        );
    }
}

export default PhotoContainer