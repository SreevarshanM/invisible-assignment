import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";
import { studentData } from "../../Data/studentDataJSON";

const StudentTables = (props) => {
  const { user, isAuthenticated, isLoading } = useKindeAuth();
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Student Data</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Grades
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Register Number</th>
                <th>Semester</th>

                <th>Course Code</th>
                <th>Grade</th>
                <th>Credits</th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.register_number}</h6>
                        <span className="text-muted">{tdata.name}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.semester}</td>
                  <td>{tdata.course_code}</td>
                  <td>{tdata.grade}</td>
                  <td>{tdata.credits}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default StudentTables;
