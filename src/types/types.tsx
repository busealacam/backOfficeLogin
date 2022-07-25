
/**** type of navigation ****/
export type NavigationTypeParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined;
    Admin: undefined;
    Edit: undefined;
    Gallery: undefined;
}

/**** type of operation form registration form ****/
export type IFormType = {
    formType: "login" | "signin" | "loggedin"
}

/**** type of registration form ****/
export type RForm = {
    email: string,
    password: string,
    operation: "login" | "signin" | "loggedin"
}

/**** type of dashboard form ****/
export type DashForm = {
    name: string,
    email: string,
    password: string,
    id: string,
    type: ["web", "mobile"],
}

