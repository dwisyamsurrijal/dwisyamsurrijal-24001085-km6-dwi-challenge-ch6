import { Col, Card, Image, Button,Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/actions/car";
import Protected from "../Protected";

const CarCard = ({ car }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete data of this car?")) {
            dispatch(deleteCar(id, navigate));
        }
    };

  return (
    <Col md={4}>
      <Stack gap={3}>
        <Card>
          <Card.Header>{car?.name}</Card.Header>
          <Card.Body>
            {car?.image && (
              <Image src={car?.image} className="img-fluid" rounded />
            )}
            <div className={car?.image ? "mt-4" : ""}>
              <h5>{car?.name}</h5>
              <h6>{car?.cartype?.type}</h6>
              <h6>Rp {car?.rentPerDay} / Day</h6>
            </div>
            <Link to={`/cars/${car?.id}`}>
              <Button variant="primary">View Detail</Button>{" "}
            </Link>
            <Protected roles={["admin", "superadmin"]}>
              <Link to={`/cars/update/${car?.id}`}>
                <Button variant="warning" className="me-2">
                  Update
                </Button>
              </Link>
              <Button variant="danger" onClick={() => handleDelete(car.id)}>
                Delete Car
              </Button>
            </Protected>
          </Card.Body>
        </Card>
      </Stack>
    </Col>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
