import Database from "../Database/index.js";

function AssignmentRoutes(app) {
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = Database.assignments
            .filter((a) => a.course === cid);
        console.log(assignments);
        res.send(assignments);
    });

    // app.post("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params;
    //     const newModule = {
    //         ...req.body,
    //         course: cid,
    //         _id: new Date().getTime().toString(),
    //     };
    //     Database.modules.push(newModule);
    //     res.send(newModule);
    // });
    // app.delete("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     Database.modules = Database.modules.filter((m) => m._id !== mid);
    //     res.sendStatus(200);
    // });
    // app.put("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     const moduleIndex = Database.modules.findIndex(
    //         (m) => m._id === mid);
    //     Database.modules[moduleIndex] = {
    //         ...Database.modules[moduleIndex],
    //         ...req.body
    //     };
    //     res.sendStatus(204);
    // });

}
export default AssignmentRoutes;