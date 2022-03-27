import React, { Component } from 'react';
import '../../index.css'

export default class PastVotingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      votingList : [
        
      ]
    };
    this.setVotingList = this.setVotingList.bind(this);
  }

  setVotingList(votingList){
    this.setState({
      votingList: votingList
    });
  }
  async componentDidMount(){
    // const votingList = await fetch();
    // this.setVotingList(votingList);
    console.log("hi");

  }



  handleDelete(){
    
  }

  render() {
    return (
      <div className='votingListBody'>
          <div className="flex justify-center">
            <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
              <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">An item</li>
              <li className="px-6 py-2 border-b border-gray-200 w-full">A second item</li>
              <li className="px-6 py-2 border-b border-gray-200 w-full">A third item</li>
              <li className="px-6 py-2 border-b border-gray-200 w-full">A fourth item</li>
              <li className="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
            </ul>
          </div>

      </div>
    )
  }
}
