import React from 'react';
import Sidebar from '../../Components/Dashboard/Sidebar';
import DataTable from '../../Components/DataTables/DataTable';
import PrescriptionDataTable from '../../Components/DataTables/PrescriptionDataTable';

const Prescriptions = () => {

    return (
            <div className="container-fluid row " >
                <Sidebar></Sidebar>
                <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB"}}>
                    <h5 className="mb-5">Prescriptions</h5>
                    <DataTable tableName="All Prescriptions">
                        <PrescriptionDataTable/>
                    </DataTable>
                </div>
            </div>
    );
};

export default Prescriptions;