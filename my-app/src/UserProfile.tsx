import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Spinner, Alert } from 'react-bootstrap';

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

function UserProfile() {
    const [userId, setUserId] = useState<string>('1');
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!userId) return;
        
        setLoading(true);
        setError(null);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => {
                if (!res.ok) throw new Error('User not found');
                return res.json();
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setUser(null);
                setLoading(false);
            });
    }, [userId]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    };
    
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Form.Group>
                                <Form.Label>Enter User ID</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={userId}
                                    onChange={handleChange}
                                    placeholder="Enter User ID (1-10)"
                                />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                    
                    {loading && (
                        <div className="text-center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    )}
                    
                    {error && (
                        <Alert variant="danger">{error}</Alert>
                    )}
                    
                    {user && (
                        <Card>
                            <Card.Header>
                                <h3>{user.name}</h3>
                            </Card.Header>
                            <Card.Body>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> {user.website}</p>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;