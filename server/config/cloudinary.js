const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dzmvsrcod",
  api_key: "332585861833495",
  api_secret: "t2Uj1b-PCcDAyLpogAH5X8NSokY",
});

module.exports = cloudinary;
