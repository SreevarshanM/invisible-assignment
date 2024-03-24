import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const SalesChart = () => {
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
  );
};

export default SalesChart;
