# import strawberry

from fastapi import FastAPI

# from strawberry.fastapi import GraphQLRouter
app = FastAPI()


@app.get('/')
def hello():
    return {'hello': "from fastapi"}
