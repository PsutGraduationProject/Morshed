import typing
import strawberry


def welcome():
    return [
        HelloWorld(
            title="Hello World !!",
        ),
    ]


@strawberry.type
class HelloWorld:
    title: str


@strawberry.type
class Query:
    welcome: typing.List[HelloWorld] = strawberry.field(resolver=welcome)


schema = strawberry.Schema(query=Query)
