import state from "./models/state";
import { fetchData } from "./actions/data-actions";


fetchData().then(() => {
    const role = "Mentor";
    const university = "Edinburgh";
    const averageMentorResponse = state.getAverageResponseTimeByRoleAndUniversity(role, university);

    document.getElementById("root").innerHTML = `Average ${role} of ${university} response time is ${averageMentorResponse} minutes`;
});
