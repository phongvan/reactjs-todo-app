import { useState } from "react";

import { Button, Form } from "react-bootstrap";

function AddForm(props: { onSubmit: (arg0: string) => void }) {
  const [name, setName] = useState("");
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    props.onSubmit(name);
    setName('');
  };
  return (
    <>
      <h3 className="text-center text-white">Form Add</h3>
      <Form onSubmit={handleSubmitForm}>
        <div className="d-flex mb-3 ">
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter Task Name"
          />
          <Button variant="primary" type="submit" className="">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
export default AddForm;
