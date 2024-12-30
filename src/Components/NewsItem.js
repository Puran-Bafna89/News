import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        let { title, msg, imageUrl, newsUrl, newsPublished, author, source} = this.props;
        return (
            <>
                <div className="card my-3">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "50%"}}>
                        {source}
                        {/* {console.log(imageUrl)} */}
                    </span>
                    <img src={imageUrl === null ? "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20241228065314.jpg" : imageUrl} className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{msg === null ? "An Energy Department study concludes that unfettered U.S. exports of liquefied natural gas, or LNG, would harm the environment and the economy." : msg}</p>
                        <p className="card-text"><small className="text-body-secondary">by: {!author?"Unknown":author} - {new Date(newsPublished).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}
