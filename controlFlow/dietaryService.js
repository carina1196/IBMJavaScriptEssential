let role = "Employee";
let authorization;

switch (role) {
    case "Employee":
        authorization = "Full Access to Dietary Services";
        break;
    case "Enrolled Member":
        authorization = "Full access to Dietary Services and One-to-One Interaction with a Dietician";
        break;
    case "Subscriber":
        authorization = "Partial Access to Dietary Services";
        break;
    default:
        authorization = "Please either subscribe or enroll to access this facility";
}

console.log("Message:", authorization);