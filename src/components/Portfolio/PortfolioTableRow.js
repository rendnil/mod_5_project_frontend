//component for each row in the portfolio table

import React from "react"
import {Table} from "semantic-ui-react"
import DateBuilder from "../../parsers/DateBuilder"


const PortfolioTableRow = ({trade}) =>{

  //determine whether trade was a buy/sell
  const determineBuyOrSell = (trade) =>{
    return trade.buy? "Buy" : "Sell"
  }

  //transform the date to readable format
  const dateFormat = (rawDate) => {
    return DateBuilder.dateFormat(Date.parse(rawDate))
  }

  //transform the time to readable format 
  const timeFormat = (rawDate) =>{
    return DateBuilder.timeFormat(Date.parse(rawDate))
  }

      return(
        <Table.Row>
          <Table.Cell>{dateFormat(trade.created_at)}</Table.Cell>
          <Table.Cell>{timeFormat(trade.created_at)}</Table.Cell>
          <Table.Cell>{trade.asset.symbol}</Table.Cell>
          <Table.Cell>{trade.asset.name}</Table.Cell>
          <Table.Cell>{determineBuyOrSell(trade)}</Table.Cell>
          <Table.Cell>{trade.price.toLocaleString()}</Table.Cell>
          <Table.Cell>{trade.quantity}</Table.Cell>
          <Table.Cell>{trade.pnl.toLocaleString()}</Table.Cell>
        </Table.Row>
        )
  }

  export default PortfolioTableRow
