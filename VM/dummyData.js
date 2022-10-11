
export const DummyLocations = {
    "Pune": "Pune",
    "Chennai": "Chennai",
    "Bangluru": "Bangluru",
    "Mumbai": "Mumbai"
  }
  
  
  export const Status = {
    "ON": "ON",
    "OFF": "OFF"
  }


// export interface I_VM {

// }

export const DummyVMs = [
    {
      VM_ID: 1,
      VM_Name: '1Name',
      Location:  DummyLocations.Bangluru,
      Status: Status.ON
    },
    {
      VM_ID: 2,
      VM_Name: '2Name',
      Location:  DummyLocations.Chennai,
      Status: Status.ON
    },
    {
      VM_ID: 3,
      VM_Name: '2Name',
      Location:  DummyLocations.Chennai,
      Status: Status.OFF
    },
    {
      VM_ID: 4,
      VM_Name: '2Name',
      Location:  DummyLocations.Chennai,
      Status: Status.ON
    }  
  ]