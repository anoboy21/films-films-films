import { FC } from "react";
import { Card, Container } from "react-bootstrap";
import { Layout, SignUpForm } from "../../components";
import { withAuth } from "../../hoc";
import { useUser } from "../../hooks";

const SignUpPage: FC = () => {
  const { signUp } = useUser();

  return (
    <Layout page="signup" hideNav>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Registrate</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Es rápido y fácil
            </Card.Subtitle>
            <Container>
              <SignUpForm onSignUp={signUp} />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export const SignUp = withAuth(SignUpPage);
