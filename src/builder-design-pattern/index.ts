import { RequestBuilder } from "./RequestBuilder";

const userGetRequest = new RequestBuilder("GET", "https://api.example.com/users/123")
    .withHeader("Authorization", "Bearer ABC-123")
    .withQueryParam("fields", "name,email")
    .build();

const userPostRequest = new RequestBuilder("POST", "https://api.example.com/users")
    .withHeader("Authorization", "Bearer ABC-123")
    .withJsonBody({ name: 'vimal', email: 'vimalcodingclasses@gmail.com' })
    .build();

userGetRequest.send();
userPostRequest.send();