import { Col, Row } from "reactstrap";
import StudentChart from "../components/dashboard/StudentChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/StudentTable";
import TopCards from "../components/dashboard/TopCards";
import { allStudentData } from "../Data/allStudentDataJson";
import { useState, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Loader from "../layouts/loader/Loader";
import { Card, CardText, CardTitle, Button } from "reactstrap";

const Starter = () => {
  const [data, setData] = useState([]);
  const { login, isAuthenticated, isLoading } = useKindeAuth();
  console.log(isLoading);
  useEffect(() => {
    setData(allStudentData);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {" "}
          {isAuthenticated ? (
            <div>
              {/***Top Cards***/}
              <Row>
                <Col sm="6" lg="3">
                  <TopCards
                    bg="bg-light-success text-success"
                    title="students"
                    subtitle="Total Students"
                    number={data.length}
                    icon="bi bi-person "
                  />
                </Col>
                <Col sm="6" lg="3">
                  <TopCards
                    bg="bg-light-danger text-danger"
                    title="Refunds"
                    subtitle="Total Batches"
                    number="3"
                    icon="bi bi-person"
                  />
                </Col>
              </Row>
              {/***Sales & Feed***/}
              <Row>
                <Col sm="6" lg="6" xl="7" xxl="8">
                  <StudentChart />
                </Col>
                <Col sm="6" lg="6" xl="5" xxl="4">
                  <Feeds />
                </Col>
              </Row>
              {/***Table ***/}
              <Row>
                <Col lg="12">
                  <ProjectTables data={data} />
                </Col>
              </Row>
              {/***Blog Cards***/}
              <Row></Row>
            </div>
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
        </>
      )}
    </>
  );
};

export default Starter;
