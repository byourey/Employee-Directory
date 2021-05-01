import React, { useState, useEffect, useRef} from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import API from "../utils/API";

const userTable = () => {

    const [employees, setEmployees] = useState([]);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
     API.getUsers().then(data => {
        const employeeList = data.results.map((employee:any) => {
            return {

            }
        }) 
     }
    })

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

    const header = (
        <div className="table-header">
           <p>US Employees</p> 
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter((e.target as any).value)} placeholder="Global Search" />
            </div>
        </div>
    );

    return (
        <div className="card">
            {/* The Datatable value is the initial value we set up in useState but is then updated with the changes made when we create a new array for listEmployees. In the Column, the "field" name must match the "key" name in const listEmployees */}
            <DataTable ref={dt} value={employees} header={header} footer={footer} className="p-datatable-striped p-text-center" removableSort globalFilter={globalFilter} emptyMessage="No customers found." resizableColumns columnResizeMode="fit">
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

export default userTable;