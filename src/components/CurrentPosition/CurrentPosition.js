import React from "react"
import { connect } from 'react-redux'
import {Segment} from "semantic-ui-react"
import CurrentPositionTable from "./CurrentPositionTable"



class CurrentPosition extends React.Component{

  render(){

      return(
        <Segment>
          <CurrentPositionTable
          baseMarketData = {this.props.baseMarketData}
          marketData={this.props.marketData}
          trades={this.props.currentUser.trades}
          positions={this.props.currentUser.positions}/>
        </Segment>
      )

  }
}

const mapStateToProps = (state) => {
  return {
          currentUser: state.authUser.user,
          marketData: state.marketData,
          baseMarketData: state.baseMarketData
  }
}

export default connect(mapStateToProps)(CurrentPosition)
//
