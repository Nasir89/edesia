import React, { Component } from "react";
import { getDeliveriesAdmin } from "../../helpers/api";
import { Link } from "react-router-dom";
import "./Table.css";
class DeliveriesAdmin extends Component {
  constructor() {
    super();
    this.state = {
      deliveries: []
    };
  }
  componentDidMount = async () => {
    const data = await getDeliveriesAdmin();
    console.log(data);
    this.setState({
      deliveries: data.data
    });
  };
  onClick = () => {
    console.log("onClick working");
  };
  sortByDate = () => {
    const sortedDeliveries = this.state.deliveries.sort((a, b) => {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    });

    this.setState({
      deliveries: sortedDeliveries
    });
    console.log(sortedDeliveries);
  };
  render() {
    return (
      <div className="App">
        <h2> All Deliveries</h2>
        <h3>
          <Link to="/admin/deliveries/add"> Add Delivery </Link>
        </h3>
        <button onClick={this.sortByDate}> Sort</button>
        <table className="results">
          <thead>
            <tr>
              <th>Delivery Id </th>
              <th>address </th>
              <th> Deadline </th>
              <th> Status</th>
              <th>driver_id </th>
            </tr>
          </thead>
          {this.state.deliveries.map(delivery => (
            <tbody>
              <tr className="delivery-row" onClick={this.onClick}>
                <td>{delivery.delivery_id} </td>
                <td>{delivery.address} </td>
                <td>{delivery.deadline} </td>
                <td>{delivery.status} </td>
                <td>{delivery.driver_id} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default DeliveriesAdmin;
