import graphene
from users_management_service.graphql_auth import relay


class AuthMutation(graphene.ObjectType):
    register = relay.Register.Field()
    verify_account = relay.VerifyAccount.Field()
