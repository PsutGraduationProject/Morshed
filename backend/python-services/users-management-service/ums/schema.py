import graphene

from graphql_auth.schema import (
    UserQuery,
    MeQuery
)

from graphql_auth import relay


class Query(UserQuery, MeQuery, graphene.ObjectType):
    pass


schema = graphene.Schema(
    query=Query,
)
