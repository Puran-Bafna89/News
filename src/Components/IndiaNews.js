import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {

    static propTypes = {
        catagory: PropTypes.string,
        pageSize: PropTypes.number
    }

    static defaultProps = {
        catagory: "general",
        pageSize: 15
    }

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: true,
            page: 0,
            available: 100,
            hasMore: true
        }
        document.title = `${this.props.catagory.charAt(0).toUpperCase() + this.props.catagory.substring(1)} - News`;
    }

    updatePage = async () => {
        // console.log("cdm - pageno." + this.state.page);
        this.setState({ loading: true});
        console.log(this.props.todayDate);
        let data = await fetch(`https://api.worldnewsapi.com/search-news?source-country=in&text=${this.props.catagory}&earliest-publish-date=${this.props.todayDate}&language=en&api-key=9722c80d37b04105b2f016501a275aa7&offset=${this.state.page}&number=${this.props.pageSize}`);
        
        let updatedData = await data.json();
        this.setState({
            news: updatedData.news,
            available: this.state.available,
            // page: this.state.page + 1,
            loading: false,
        });
    }

    fetchMoreData = async () => {
        let data = await fetch(`https://api.worldnewsapi.com/search-news?source-country=in&earliest-publish-date=${this.props.todayDate}&language=en&text=${this.props.catagory}&api-key=9722c80d37b04105b2f016501a275aa7&offset=${this.state.page + 10}&number=${this.props.pageSize}`);
        let updatedData = await data.json();
        this.setState({
            news: this.state.news.concat(updatedData.news),
            available: this.state.available,
           // available: this.state.available - updatedData.number, // don't use this line
            page: this.state.page + 10,
        });
    }



    componentDidMount = async () => {
        this.updatePage();
    }


    showSpinner = () => {
            return <div style={{ display: "grid", placeContent: "center" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }

    render() {
        // console.log("inside render")
        return (
            <div>
                <h2 style={{ margin: "35px 0", textAlign: "center" }}>This is {this.props.catagory} - Top Headlines</h2>
                {this.state.loading && this.showSpinner()}
                <InfiniteScroll
                    dataLength={this.state.news.length}  
                    next={this.fetchMoreData}
                    hasMore={this.state.news.length <= this.state.available}
                    loader={<h6>{this.showSpinner()}</h6>}
                >
                    <div className="container my-4">
                        <div className="row">
                            {this.state.news.map((element, index) => {
                                return <div className="col-md-4" key={index}>
                                    <NewsItem title={element.title} msg={element.summary} imageUrl={element.image} newsPublished={element.publish_date} newsUrl={element.url} author={element.author} source={"Source - BBC"} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
