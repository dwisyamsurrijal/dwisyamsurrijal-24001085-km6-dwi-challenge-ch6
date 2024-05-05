import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../../redux/actions/car";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { car } = useSelector((state) => state.car);

  useEffect(() => {
    // get profile
    dispatch(getCar(navigate, id));
  }, [dispatch, id, navigate]);

  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>{car?.name}</Card.Header>
          <Card.Body>
            <Form>
              {!car ? (
                <>
                  <h2>Loading...</h2>
                </>
              ) : (
                <>
                  {car?.image && (
                    <Image src={car?.image} className="img-fluid" rounded />
                  )}

                  <div className={car?.image && "mt-4"}>
                    <Form.Group className="mb-3" controlId="id">
                      <Form.Label>Id</Form.Label>
                      <Form.Control type="text" value={car?.id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" value={car?.name} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Car Type ID</Form.Label>
                      <Form.Control type="text" value={car?.cartype_id} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rentperday">
                      <Form.Label>Rent Per Day</Form.Label>
                      <Form.Control
                        type="text"
                        value={car?.rentPerDay}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Size</Form.Label>
                      <Form.Control type="text" value={car?.size} disabled />
                    </Form.Group>
                  </div>
                </>
              )}
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;
