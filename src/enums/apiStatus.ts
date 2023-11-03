export enum ApiStatus {
    // API request is being made
    Loading,
    // API call was successful
    Success,
    // API call resulted in an unauthorized error even after attempting
    // a token refresh
    ErrorUnauthorized,
    // API resulted in an error
    Error,
    // The initial request failed and we are attempting to refresh an
    // access token
    RefreshingToken,
    // We have new access token and will attempt to make a request
    // again. Note: if the retry fails the status will be `Error`.
    Retrying,
}