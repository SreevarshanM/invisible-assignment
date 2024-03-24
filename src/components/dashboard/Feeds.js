import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Semester 8 Data Added",
    icon: "bi bi-bell",
    color: "primary",
    date: "2 Days ago",
  },
  {
    title: "Semester 7 Data Added",
    icon: "bi bi-bell",
    color: "primary",
    date: "4 Months ago",
  },
  {
    title: "Semester 6 Data Added",
    icon: "bi bi-bell",
    color: "primary",
    date: "10 Months ago",
  },
  {
    title: "Semester 5 Data Added",
    icon: "bi bi-bell",
    color: "primary",
    date: "1 Year ago",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
