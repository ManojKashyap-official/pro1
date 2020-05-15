/**
 * StudentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    /**
     * `StudentController.create()`
     */
    create: async function(req, res) {
        try {
            const studentData = req.body;
            const details = await Student.create(studentData).fetch();
            console.log(details);
            return res.redirect('/detail');
        } catch (e) {
            return res.serverError(e);
        }

    },
    detail: async function(req, res) {
        try {
            let data = await Student.find({});
            return res.view('pages/details', { data: data });

        } catch (e) {
            return res.server(e);

        }
    },
    delete: async function(req, res) {
        try {
            const deleteStu = await Student.destroy({ id: req.body.id }).fetch();
            return res.redirect('pages/detail');

        } catch (e) {
            return res.serverError(e);
        }
    },
    update: async function(req, res) {
        try {
            const data = await Student.find({ id: req.body.id });
            return res.view('pages/updateStudent', { data: data });

        } catch (e) {
            return res.serverError(e);
        }
    },
    updateStu: async function(req, res) {
        try {
            const data2 = await Student.update({
                id: req.body.id
            }, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                dob: req.body.dob,
                address: req.body.address,
                education: req.body.education,
                board: req.body.board,
                passing: req.body.passing,
                score: req.body.score,
                course: req.body.course,
            });
            console.log('hhhhhhhhhhh', data2);
            return res.redirect('detail');
        } catch (e) {
            return res.serverError(e);
        }
    }

};