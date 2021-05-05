import React, { useState, useEffect, useRef} from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import API from "../utils/API";

const UserTable = () => {

    const [employees, setEmployees] = useState([]);
    const dt = useRef(null);

    useEffect(() => {
        API.getUsers().then(data => {
            const listEmployees = data.data.results.map((employee:any) => {
                return {
                    name: `${employee.name.first} ${employee.name.last}`,
                    street: `${employee.location.street.number} ${employee.location.street.name}`,
                    city: `${employee.location.city}`,
                    state: `${employee.location.state}`,
                    zipcode: `${employee.location.postcode}`,
                    phone: `${employee.phone}`,
                    email: `${employee.email}`,
                    image: `${employee.picture.medium}`
                }
            })
            setEmployees(listEmployees)


        });
    }, []);

    const imageBodyTemplate = (rowData:any) => {
        return <img src={`${rowData.image}`} alt={rowData.name} className="p-shadow-2" />;
    }

 

    const nameBodyTemplate = (rowData:any) => {
        return (
            <React.Fragment>
                {rowData.name}
            </React.Fragment>
        );
    }

    const cityBodyTemplate = (rowData:any) => {
        return (
            <React.Fragment>
                {rowData.city}
            </React.Fragment>
        );
    }

    const stateBodyTemplate = (rowData:any) => {
        return (
            <React.Fragment>
                {rowData.state}
            </React.Fragment>
        );
    }

    const zipBodyTemplate = (rowData:any) => {
        return (
            <React.Fragment>
                {rowData.zipcode}
            </React.Fragment>
        );
    }

    


    return (
        <div className="card">
            <DataTable ref={dt} value={employees} className="p-datatable-striped p-text-center" removableSort emptyMessage="No customers found." resizableColumns columnResizeMode="fit">
                <Column field="name" header="Name" sortable body={nameBodyTemplate} filter filterPlaceholder="Search by name" style={{width:'10%'}}></Column>
                <Column field="street" header="Street" style={{width:'10%'}}></Column>
                <Column field="city" header="City" sortable body={cityBodyTemplate} filter filterPlaceholder="Search by city" style={{width:'10%'}}></Column>
                <Column field="state" header="State" sortable body={stateBodyTemplate} filter filterPlaceholder="Search by state" style={{width:'10%'}}></Column>
                <Column field="zipcode" header="Zip" body={zipBodyTemplate} filter filterPlaceholder="Search by zip" style={{width:'10%'}}></Column>
                <Column field="phone" header="Phone" style={{width:'10%'}}></Column>
                <Column field="email" header="Email" className="email" style={{width:'20%'}}></Column>                  
                <Column field="image" header="Image" body={imageBodyTemplate} style={{width:'10%'}}></Column>
            </DataTable>
        </div>
    )




}

export default UserTable;
