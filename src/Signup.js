import React from 'react'
import { Button,Form } from 'react-bootstrap';
const Signup = () => {
    return (
        <div class="container">
        <h2>Inserez une nouvelle mesure</h2>
        <Form>

        <label for="exampleFormControlSelect1">Type de mesure</label>
        <select class="form-control" id="exampleFormControlSelect1">
        <option>Humidity</option>
        <option>Temperature</option>
        <option>Airpollution</option>
        </select>
        <label class="control-label" for="date">Date de Création</label>
        <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text"/>
        <label class="control-label" for="date">Value</label>
        <input class="form-control" id="value" name="value" placeholder="" type="text"/>
        <label class="control-label" for="date">sensorID</label>
        <input class="form-control" id="sensorID" name="sensorID" placeholder="" type="text"/>

        <Button variant="primary" type="submit">
    Submit
        </Button>
        </Form>
        </div>
    )
}

export default Signup
