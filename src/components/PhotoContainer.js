// Import libraries
import React, { Component } from 'react';
import Photo from './Photo';
import PageNotFound from './PageNotFound';

class PhotoContainer extends Component {
    getPhotos() {
        let results = this.props.data;
        let images;

        if(results.length > 0) {
            images = results.map(image => <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />);
        } else {
            images = <PageNotFound />;
        }
        
        return images;
    }

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