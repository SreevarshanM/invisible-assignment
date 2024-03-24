import ProjectTables from "../../components/dashboard/StudentTable";
import { Row, Col } from "reactstrap";
import { studentData } from "../../Data/studentDataJSON";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Card, CardText, CardTitle, Button } from "reactstrap";

const Tables = () => {
  const [data, setData] = useState([]);
  const { login, isAuthenticated, isLoading } = useKindeAuth();
  useEffect(() => {
    setData(studentData);
  }, []);
  return (
    <Row>
      <Col lg="12">
        {isAuthenticated ? (
          <ProjectTables data={data} />
        ) : (
          <div>
            <Row style={{ marginLeft: "15rem ", marginTop: "10rem" }}>
              <Col md="6" lg="10">
                <Card body className="text-center">
                  <CardTitle tag="h5">Welcome Back ..!</CardTitle>
                  <CardText>Please log in To Continue</CardText>
                  <div>
                    <Button onClick={login} color="light-danger">
                      LOG IN
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Tables;
