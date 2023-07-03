import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [{}],
      loading: false,
      page: 1
    }
    document.title = this.capitalizeFirstLetter(this.props.category) + " - News-App";
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5b0d49035c64e598e5c108b34976454&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults})
    this.setState({loading: false});
  }

  fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5b0d49035c64e598e5c108b34976454&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), page: this.state.page + 1})
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Here are the top {this.props.category} headlines</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Loading />}
          >
            <div className='container'>
            <div className="row">

              {this.state.articles.map((elem) => {
                return <div className="col-md-4" key={elem.url}>
                  {<NewsItem imageUrl={elem.urlToImage ? elem.urlToImage : "https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg"} title={elem.title} desc={elem["description"]} url={elem.url}
                    date={elem.publishedAt} author={elem.author} />}
                </div>
              })}
            </div>
            </div>
          </InfiniteScroll>

          {/* <div className="container my-3 d-flex justify-content-between">
            <button disabled={this.state.page < 2} type="button" className="btn btn-primary" onClick={() => { this.handlePrevClick() }}>Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={() => { this.handleNextClick() }}>Next</button>
          </div> */}
        </div >
      </>
    )
  }
}
