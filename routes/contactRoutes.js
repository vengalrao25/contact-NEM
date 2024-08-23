const express = require("express");
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
  getContacts,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// router.route("/").get((req, res)=>{
//     res.status(200).json({message:"Get All contacts"})
// })
// router.get("/", getContacts);
// router.post("/", createContact);
// router.get("/:id", getContact);
// router.put("/:id", updateContact);
// router.delete("/:id", deleteContact);
module.exports = router;
