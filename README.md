<<<<<<< HEAD
# events-api
events api
=======
API Documentation
This API provides endpoints to manage events and venues. Below are the available endpoints and their usage:

Get List of Events
Endpoint
GET http://my.api.url/events?sort=["name","ASC"]&range=[0, 24]&filter={"start_date":""}

This endpoint retrieves a list of events based on specified sorting, pagination, and filtering criteria.

Get a Single Event
Endpoint
GET http://my.api.url/events/123

This endpoint retrieves a single event by its unique identifier.

Get Multiple Events
Endpoint
GET http://my.api.url/events?filter={"id":[123,456,789]}

This endpoint retrieves multiple events based on a list of event IDs provided in the filter criteria.

Get Venues by Event ID
Endpoint
GET http://my.api.url/venues?filter={"event_id":345}

This endpoint retrieves venues associated with a specific event ID provided in the filter criteria.

Create an Event
Endpoint
POST http://my.api.url/events

This endpoint allows the creation of a new event. The request body should contain event details such as name, description, start date, end date, venue information, thumbnail, and status.

Example Request Body:
json
Copy code
{
    "name": "Event Name",
    "description": "Event Description",
    "start_date": "2023-11-01T12:00:00Z",
    "end_date": "2023-11-02T12:00:00Z",
    "venue": {
        "name": "Venue Name",
        "country": "Country Name",
        "state": "State Name",
        "city": "City Name",
        "timezone": "Timezone",
        "zip_code": "Zip Code",
        "address": "Venue Address"
    },
    "thumbnail": "URL to Thumbnail Image",
    "status": "active"
}
Update an Event
Endpoint
PUT http://my.api.url/events/123

This endpoint allows updating an existing event identified by its unique identifier. Provide the updated event details in the request body.

Delete an Event
Endpoint
DELETE http://my.api.url/events/123

This endpoint deletes an event by its unique identifier
>>>>>>> bcfd4ea (added swagger doc config)
