import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import { allStudentData } from "../../Data/allStudentDataJson";

const StudentChart = () => {
  const chartoptions = {
    series: [
      {
        name: "Batch 1", //18
        data: [15, 14, 18, 15, 17, 17, 11, 13],
      },
      {
        name: "Batch 2", //22
        data: [20, 17, 19, 13, 22, 21, 8, 18],
      },
      {
        name: "Batch 3", //13
        data: [13, 11, 12, 6, 13, 11, 0, 0],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Sem 1",
          "Sem 2",
          "Sem 3",
          "Sem 4",
          "Sem 5",
          "Sem 6",
          "Sem 7",
          "Sem 8",
        ],
      },
    },
  };
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">MSc Students Performance</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            Performance Report
          </CardSubtitle>
          <Chart
            type="area"
            width="100%"
            height="390"
            options={chartoptions.options}
            series={chartoptions.series}
          ></Chart>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">MSc Students Performance</CardTitle>
          <CardSubtitle className="text-muted" tag="h6">
            Performance Report
          </CardSubtitle>
          <Chart
            type="bar"
            height="390"
            width="100%"
            options={chartoptions.options}
            series={chartoptions.series}
          ></Chart>
        </CardBody>
      </Card>
    </>
  );
};

export default StudentChart;

//Functionality for  the chart to be displayed on a dashboard page

// const data1 = [];
// const data2 = [];
// const data3 = [];
// if (allStudentData) {
//   allStudentData.map((ele) => {
//     if (ele.semester === 1) {
//       if (
//         ele.batch === 1 &&
//         (ele.grade === "A" || ele.grade === "B+" || ele.grade === "A-")
//       ) {
//         if (data1.length === 0) {
//           data1[0] = 1;
//           return ele;
//         }
//         data1[0] += 1;
//       } else if (
//         ele.batch === 2 &&
//         (ele.grade === "A" || ele.grade === "B+" || ele.grade === "A-")
//       ) {
//         if (data1.length === 0) {
//           data2[0] = 1;
//           return ele;
//         }
//         data2[0] += 1;
//       } else if (
//         ele.batch === 3 &&
//         (ele.grade === "A" || ele.grade === "B+" || ele.grade === "A-")
//       ) {
//         if (data1.length === 0) {
//           data3[0] = 1;
//           return ele;
//         }
//         data3[0] += 1;
//       }
//     }
//   });
//   console.log(data1);
// }
