# MongoDB_NodeJS_RestAPI

CRUD Operations with MongoDB in NodeJS, which supports `POST`(Create), `GET` (Read),`PUT/PATCH` (Update), `DELETE` APIs

User Schema is,  
  Student Object  
  {      
       \_id : Number  
       rollNo : String
       name : String  
       department : String  
       subject : String  
       teacher : String  
  }
## Test API's

### 1)READ API:
To test the read api, open POSTMAN and enter the following as the request URL.  
http://localhost:9000/students  
Select Method ‘GET’, and enter above request to read all students, this will return Array of JSON Objects.

![](CRUD/Images/get_all.png)

To read user with some id enter below request  
http://localhost:9000/students/id
This will return student’s JSON having given id.

![](CRUD/Images/get_by_id.png)


### 2)CREATE API:
To test the create api, open POSTMAN and enter the following as the request URL.  
http://localhost:9000/students   
Select Method ‘POST’ and enter raw JSON data and it will returns entered JSON.  
e.g.   
  {
      "\_id":18223,
      "rollNo":"Math18223",
      "name":"Manoj",
      "department":"Mathematics",
      "subject":"MongoDB",
      "Teacher":"Prof. Mane"
  }
  
  ![](CRUD/Images/post.png)
  

### 3)UPDATE API:
To test the update api, open POSTMAN and enter the following as the request URL.  
http://localhost:9000/students/id 
Select Method ‘PUT’ or ‘PATCH’ and enter raw JSON data to update data (data updated with respect to id)  
and return JSON Object of updated data.  
e.g.  
  {
      "rollNo":"Math18223",
      "name":"Manoj",
      "department":"Mathematics",
      "subject":"PostgreSQL",
      "Teacher":"Prof. Patil"
  }   
  
  ![](CRUD/Images/put.png)

### 4)DELETE API:
To test the delete api, open POSTMAN and enter the following as the request URL.  
http://localhost:9000/students/id 
Select Method ‘DELETE’  
i.e. this method deletes student of given id and returns user’s JSON having that id

![](CRUD/Images/delete.png)
