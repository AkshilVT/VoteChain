import React, { Component } from 'react'
import '../css/votingCard.css';
export default class VotingCard extends Component {
  render() {
    return (
      <div className='voteBody'>
         <div className="voteCardContainer">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars" />
                  <h2 className="java">Yes</h2>
                  <p className="java"></p>
                </div>
              </div>
              <div className="face face2">
                <h2>Yes</h2>
              </div>
            </div>
          </div>
          <div className="voteCardContainer">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <span className="stars" />
                  <h2 className="java">No</h2>
                  <p className="java"></p>
                </div>
              </div>
              <div className="face face2">
                <h2>No</h2>
              </div>
            </div>
          </div>


      </div>
      
    )
  }
}
