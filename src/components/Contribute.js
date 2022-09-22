import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contribute = () => {

    const handleSubmit = (event) =>{
        event.preventDefault();

        // const post = { 
        //     title, 
        //     body, 
        //     author_id: userId,
        //     author: props.user.username,
        //     category, 
        //     isAnonPost 
        // };

        // setIsPending(true);
        
        // fetch("http://localhost:3002/posts", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(post)
        // }).then(() => {
        //     console.log("New post added");
        //     setIsPending(false);
        // })

    };

    return (
        <div className="form-container">
            <h2>Contribute!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="inputData">Data</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputData"
                        aria-describedby="dataHelpBlock"
                    />
                    <Form.Text id="dataHelpBlock" muted>
                        Enter a phrase you want to classify as fake or not.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Fake"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Contribution
                </Button>
            </Form>
        </div>
    );
};

export default Contribute;