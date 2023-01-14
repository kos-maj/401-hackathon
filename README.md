Group project hackathon.

Trip Planning

Initialize the trip with a static trip list 
Create/Delete a new trip 

Trip ID (int)
Where are we going (string)
When you are going (string, date)
Duration of the trip in days (int)
Activities (string)
Add Friends
Name (string)
Age (int)
Email (string, maybe send email button)


## How to Use API from the Backend:
### Go to the API Page
1. first, run the server, then go to the link that termial return (usually http://127.0.0.1:8000/, so i will use this link as an example below)
2. go to http://127.0.0.1:8000/admin/
3. login with: user_name: admin, password: 123456
4. you can post/put/delete api inside the admin page
5. then go to http://127.0.0.1:8000/api/, then you will see all the api that have been created
### Access Specific API
1. we have 3 main APIs, which include Trip, Partner, Friends
2. for get all data in one classification, use http://127.0.0.1:8000/api/Friend/ or .../Trip/ etc.
3. to get one speific instance (data), using the primary key. for example, use http://127.0.0.1:8000/api/Trip/1/ to get the trip information with TID=1
### The Data Form that API Returned
1. it will return the JSON, for example: 
~~~
    {"TID":1,"trip_name":"mars","duration":2,"start_date_time":"2023-01-14T17:54:59Z","activities":"2333333"}
~~~
