from flask import json
from pymongo import MongoClient

# Mongo Database Interface
class MongoDBI:
    def __init__(self, data):
        self.client = MongoClient("mongodb://localhost:5000/")
        
        database = data['database']
        collection = data['collection']
        cursor = self.client[database]
        self.collection = cursor[collection]
        self.data = data
        
    def read_users(self):
        documents = self.client["MongoDM"]["Users"].find()
        output = []
        for data in documents:
            output.append({i: data[i] for i in data if i != '_id'})
        return output
    
    def read_messages(self):
        documents = self.client["MongoDM"]["Messages"].find()
        output = []
        for data in documents:
            output.append({i: data[i] for i in data if i != '_id'})
        return output
    
    def write(self, data):
        # log.info('Writing Data')
        new_document = data['Document']
        response = self.collection.insert_one(new_document)
        output = {'Status': 'Successfully Inserted',
                  'Document_ID': str(response.inserted_id)}
        return output
    
    def update(self):
        filt = self.data['Filter']
        updated_data = {"$set": self.data['DataToBeUpdated']}
        response = self.collection.update_one(filt, updated_data)
        output = {'Status': 'Successfully Updated' if response.modified_count > 0 else "Nothing was updated."}
        return output
    
    def delete(self, data):
        remove = data['Document']
        response = self.collection.delete_one(remove)
        output = {'Status': 'Successfully Deleted' if response.deleted_count > 0 else "Document not found."}
        return output

if __name__ == '__main__':
    # Test MongoDB interface.
    print("Test MongoClient:")
    data = {
        "database": "Test",
        "collection": "fields",
    }
    mongo_obj = MongoDBI(data)
    print(json.dumps(mongo_obj.read(), indent=4))
    print("Connection successful!")