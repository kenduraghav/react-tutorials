import { Card } from "react-bootstrap";

interface UserCardProps {
    name: string;
    age: number;
}

export function UserCard({ name, age }: UserCardProps) {
    return (
         <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>User Details</Card.Title>
                <Card.Text>User: {name}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
            </Card.Body>
        </Card>
    )
}