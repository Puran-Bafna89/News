// import logo from './logo.svg';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import News from './Components/IndiaNews';
import LoadingBar from "react-top-loading-bar";


// function App() {
//   let pageSize = 15;
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<News pageSize={pageSize} key="general" catagory='general' />}></Route>
//         <Route path="/sports" element={<News pageSize={pageSize} key="sports" catagory='sports' />}></Route>
//         <Route path="/business" element={<News pageSize={pageSize} key="business" catagory='business' />}></Route>
//         <Route path="/health" element={<News pageSize={pageSize} key="health" catagory='health' />}></Route>
//         <Route path="/science" element={<News pageSize={pageSize} key="science" catagory='science' />}></Route>
//         <Route path="/technology" element={<News pageSize={pageSize} key="technology" catagory='technology' />}></Route>
//         <Route path="/entertainment" element={<News pageSize={pageSize} key="entertainment" catagory='entertainment' />}></Route>
//       </Routes>
//     </>
//   );
// }


export default class App extends Component {
  pageSize = 10;
  // tDate = new Date().toISOString();
  // todayDate = this.tDate.substring(0, this.tDate.indexOf("T"));
  
  d = new Date();
  todayDate = this.d.getFullYear() + "-" + this.d.getMonth() + "-" +  (this.d.getDate() - 1 );

  apikey = process.env.REACT_APP_NEWS_API;

  constructor(){
    super();
    this.state = {
      progress: 10
    }
  }
  
  updateProgress = (progressValue) => {
    console.log(progressValue);
    this.setState({ progress: progressValue});
  }
  
  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.state.progress}
        />
        {/* <Routes>
          <Route path="/" element={<News pageSize={this.pageSize} apikey={this.apikey} key="general" catagory='general' />}></Route>
          <Route path="/sports" element={<News pageSize={this.pageSize} apikey={this.apikey} key="sports" catagory='sports' />}></Route>
          <Route path="/business" element={<News pageSize={this.pageSize} apikey={this.apikey} key="business" catagory='business' />}></Route>
          <Route path="/health" element={<News pageSize={this.pageSize} apikey={this.apikey} key="health" catagory='health' />}></Route>
          <Route path="/science" element={<News pageSize={this.pageSize} apikey={this.apikey} key="science" catagory='science' />}></Route>
          <Route path="/technology" element={<News pageSize={this.pageSize} apikey={this.apikey} key="technology" catagory='technology' />}></Route>
          <Route path="/entertainment" element={<News pageSize={this.pageSize} apikey={this.apikey} key="entertainment" catagory='entertainment' />}></Route>
        </Routes> */}
        <Routes>
          <Route path="/" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="general" catagory='general' />}></Route>
          <Route path="/sports" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="sports" catagory='sports' />}></Route>
          <Route path="/business" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="business" catagory='business' />}></Route>
          <Route path="/health" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="health" catagory='health' />}></Route>
          <Route path="/science" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="science" catagory='science' />}></Route>
          <Route path="/technology" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="technology" catagory='technology' />}></Route>
          <Route path="/entertainment" element={<News pageSize={this.pageSize} apikey={this.apikey} updateProgress={this.updateProgress} todayDate={this.todayDate} key="entertainment" catagory='entertainment' />}></Route>
        </Routes>
      </>
    )
  }
}


// export default App;
