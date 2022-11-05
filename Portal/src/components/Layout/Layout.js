import React from "react";
import { getUser } from "../Utils/Common";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Manpower from "../../pages/Manpower";
import Contractor from "../../pages/contractor";
import ContractorNew from "../../pages/contractor/ContractorNew";
import Leave from "../../pages/leave";
import Attendance from "../../pages/attendance";
import Announcement from "../../pages/announcement";
import Verification from "../../pages/verification";
import Employee from "../../pages/employee";
import Process from "../../pages/process";
import Salary from "../../pages/salary/Salary";
import Allocation from "../../pages/allocation";
import Location from "../../pages/location";
import UserProfile from "../../pages/userprofile";
import Expected from "../../pages/Manpower/pages/Expected";
import Actual from "../../pages/Manpower/pages/Actual";
import EmpList from "../../pages/employee/pages/EmpList";
import PendingList from "../../pages/employee/pages/PendingList";
import DeactivatedList from "../../pages/employee/pages/DeactivatedList";
import LeavingList from "../../pages/employee/pages/LeavingList";
import RejectedList from "../../pages/employee/pages/RejectedList";
import PendingAllocation from "../../pages/employee/pages/PendingAllocation";
import EmpSkill from "../../pages/process/pages/EmpSkill";
import Reports from "../../pages/reports";
import ManpowerReport from "../../pages/reports/pages/ManpowerReport";
import RequirementsReport from "../../pages/reports/pages/RequirementsReport";
import SummaryReport from "../../pages/reports/pages/SummaryReport";
import Absent from "../../pages/Manpower/pages/Absent";

import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();
  const user = getUser();
  var data = user[0].role;

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <div>
            {(() => {
              if (data === 'hr') {
                return (
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/leave" component={Leave} />
                    <Route path="/contractor" component={Contractor} />
                    <Route path="/attendance" component={Attendance} />
                    <Route exact path="/manpower" component={Manpower} />
                    <Route path="/manpower/expected" component={Expected} />
                    <Route path="/manpower/actual" component={Actual} />
                    <Route path="/manpower/absent" component={Absent} />
                    <Route path="/verification" component={Verification} />
                    <Route path="/announcement" component={Announcement} />
                    <Route exact path="/employee" component={Employee} />
                    <Route path="/employee/emplist" component={EmpList} />
                    <Route path="/employee/pendinglist" component={PendingList} />
                    <Route path="/employee/pendingallocation" component={PendingAllocation} />
                    <Route path="/employee/deactivatedlist" component={DeactivatedList} />
                    <Route path="/employee/rejectedlist" component={RejectedList} />
                    <Route path="/employee/leavinglist" component={LeavingList} />
                    <Route exact path="/process" component={Process} />
                    <Route path="/process/empskill" component={EmpSkill} />
                    <Route path="/salary" component={Salary} />
                    <Route exact path="/reports" component={Reports} />
                    <Route path="/reports/mpreport" component={ManpowerReport} />
                    <Route path="/reports/reqreport" component={RequirementsReport} />
                    <Route path="/reports/sreport" component={SummaryReport} />
                  </Switch>
                )
              } else if (data === 'hod') {
                return (
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/leave" component={Leave} />
                    <Route path="/contractor" component={Contractor} />
                    <Route exact path="/manpower" component={Manpower} />
                    <Route path="/announcement" component={Announcement} />
                    <Route exact path="/employee" component={Employee} />
                    <Route path="/employee/emplist" component={EmpList} />
                    <Route path="/employee/pendinglist" component={PendingList} />
                    <Route path="/employee/deactivatedlist" component={DeactivatedList} />
                    <Route path="/employee/leavinglist" component={LeavingList} />
                    <Route path="/manpower/expected" component={Expected} />
                    <Route path="/manpower/actual" component={Actual} />
                    <Route path="/manpower/absent" component={Absent} />
                    <Route path="/allocation" component={Allocation} />
                    <Route exact path="/process" component={Process} />
                    <Route path="/process/empskill" component={EmpSkill} />
                    <Route exact path="/reports" component={Reports} />
                    <Route path="/reports/mpreport" component={ManpowerReport} />
                    <Route path="/reports/reqreport" component={RequirementsReport} />
                    <Route path="/reports/sreport" component={SummaryReport} />
                  </Switch>
                )
              } else if (data === 'contractor') {
                return (
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/contractorNew" component={ContractorNew} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/leave" component={Leave} />
                    <Route path="/attendance" component={Attendance} />
                    <Route path="/announcement" component={Announcement} />
                    <Route exact path="/employee" component={Employee} />
                    <Route path="/employee/emplist" component={EmpList} />
                    <Route path="/employee/pendinglist" component={PendingList} />
                    <Route path="/employee/pendingallocation" component={PendingAllocation} />
                    <Route path="/employee/deactivatedlist" component={DeactivatedList} />
                    <Route path="/employee/rejectedlist" component={RejectedList} />
                    <Route path="/employee/leavinglist" component={LeavingList} />
                  </Switch>
                )
              } else if(data === 'employee'){
                return(
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/contractorNew" component={ContractorNew} />
                    <Route path="/location" component={Location} />
                  </Switch>
                )
                
              }else {
                return (
                  <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/contractorNew" component={ContractorNew} />
                    <Route path="/userprofile" component={UserProfile} />
                    <Route path="/location" component={Location} />
                    <Route path="/leave" component={Leave} />
                    <Route path="/attendance" component={Attendance} />
                    <Route path="/announcement" component={Announcement} />
                  </Switch>
                )
              }
            })()}
          </div>
        </div>
        <div className={classes.footer} >
          © {new Date().getFullYear()} <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://menon.in" rel="noopener noreferrer" target="_blank">Menon and Menon Ltd.</a> All rights reserved.
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
