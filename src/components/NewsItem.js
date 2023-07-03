import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { imageUrl, title, desc, url,date,author } = this.props;
        return (
            <>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
                        <p class="card-text"><small class="text-muted">By {!author?"Unkonwn":author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </>
        )
    }
}
