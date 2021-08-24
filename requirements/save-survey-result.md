# Save Survey Result

> ## Success paths

1. ⛔ Receives a **PUT** request on route **/api/surveys/{survey_id}/results**.
2. ⛔ Validates if the request was done by an **user**.
3. ✅ Validates the parameter **survey_id**.
4. ✅ Validates if the parameter **answer**  is a valid answer.
5. ✅ **Creates** a survey result with the provided data if there is no record stored.
6. ✅ **Updates** a survey result with the provided data if there is already a record stored.
7. ⛔ Returns **200**, with the survey results.

> ## Exceptions

1. ⛔ Returns the **404** error if the api doesn't exists.
2. ⛔ Returns the **403** error if the requester is not an user.
3. ✅ Returns the **403** error if the **survey_id** provided is invalid.
4. ✅ Returns the **403** error if the answer sent by the client is a invalid answer.
5. ✅ Returns the **500** error if an error is thrown while trying to create a survey result.
6. ✅ Returns the **500** error if an error is thrown while trying to update a survey result.
7. ✅ Returns the **500** error if an error is thrown while trying to load the survey.

