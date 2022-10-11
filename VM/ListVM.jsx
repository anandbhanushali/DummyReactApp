import React from 'react'
import { DummyVMs } from './dummyData';
export class ListVM extends React.Component {
  
  constructor(props) {
    super(props);
  
    // Initializing the state 
    this.state = { 
        vms: [

        ]
    };
    this.onEditClick = this.onEditClick.bind(this);
  }
  componentDidMount() {
    /// TODO : Use Axios to get Data from Server
    //axios.get(``).then((response) => {
    //});
    this.setState({
      vms: DummyVMs
    });

  }

  onEditClick(VMID){
      // NAVIGATE TO EDIT VIA ROUTER
  }

  

  render() {
    return (
      <table>
        <tr>
          <th>VMID </th>
          <th> VM NAME </th>
          <th> Location </th>
          <th> Status </th>
          <th> Action </th>
        </tr>
        {this.state.vms.map((vm) => {
          return (
            <tr key={vm.VM_ID}>
              <td>{vm.VM_ID}</td>
              <td>{vm.VM_Name}</td>
              <td>{vm.Location}</td>
              <td>{vm.Status}</td>
              <td> 
                <button onClick="onEditClick(vm.VM_ID)" > Edit </button>
              </td>
            </tr>
          )
        })}
      </table>
    )
  }
}

