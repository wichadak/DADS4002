from pymongo import MongoClient 


client = MongoClient("mongodb://localhost:27017/")

db = client['podify']
mycollection=db['pods'] 

record = {"title": "MongoDB and Python", 
          "description": 'MongoDB is no SQL database', 
          "tags": ['mongodb', 'database', 'NoSQL'],
          "viewers": 104}

rec = mycollection.insert_one(record)


records = [{"title": 'Future DB', 
          "description": 'A lecture on future DB', 
          "tags": ['mongodb', 'NoSQL'],
          "viewers": 85},
          {"title": 'Big Query',
          "description": 'A lecture on Google Big Query',
          "tags": ['NoSQL', 'Big Query'],
          "viewers": 201},
          {"title": 'Cassandra',
          "description": 'A lecture on Cassandra',
          "tags": ['Cassandra', 'NoSQL'],
          "viewers": 150}
          ]

rec = mycollection.insert_many(records)


for i in mycollection.find({"title": 'MongoDB and Python'}):
    print(i)

