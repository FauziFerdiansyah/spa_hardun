import React, { Component } from 'react';
import Search from '../pages/Search';

class Content extends Component {
  render(){
    return (
      <div className="container-fluid body-wrap mt-20">
        <div className="row">
          <Search/>
        </div>
      </div>
    );
  }
}

export default Content;