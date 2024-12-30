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
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            hasMore: true
        }
        document.title = `${this.props.catagory.charAt(0).toUpperCase() + this.props.catagory.substring(1)} - News`;
    }

    updatePage = async () => {
        // console.log("cdm - pageno." + this.state.page);
        this.setState({ loading: true});
        console.log(this.props.apikey);
        this.props.updateProgress(50);
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
        let updatedData = await data.json();
        this.setState({
            articles: updatedData.articles,
            totalResults: updatedData.totalResults,
            // page: this.state.page + 1,
            loading: false,
        });
        this.props.updateProgress(100);
    }

    fetchMoreData = async () => {
        // await this.setState({ loading: true});
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.catagory}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
        let updatedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(updatedData.articles),
            totalResults: updatedData.totalResults,
            page: this.state.page + 1,
            // loading: false,
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
                    dataLength={this.state.articles.length}  
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<h6>{this.showSpinner()}</h6>}
                >
                    <div className="container my-4">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
                                return <div className="col-md-4" key={index}>
                                    <NewsItem title={element.title} msg={element.description} imageUrl={element.urlToImage} newsPublished={element.publishedAt} newsUrl={element.url} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
